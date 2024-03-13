import React from 'react'
import { IColumn, IRow } from '../tableElements/TableElementas'
import { IconButton } from '../../UI'
import s from './tableLayoutHelper.module.scss'
import { Link } from '../../UI/icons'
import { UI_STYLE_CONFIG } from '../../UI/constants'
import { convert_1_0_toBool } from '../../../helpers/conditionsHelpers'
import RowMenu, { menuSettingsDefault, MenuSettingsType } from '../tableElements/RowMenu/RowMenu'
import { BoolType, ObjectEnyType } from '../../../helpers/CommonTypes'
import EditableCell from '../tableElements/EditableCell/EditableCell'
import OpenSubTable from '../tableElements/OpenSubTable/OpenSubTable'

export type HeaderTableType = {
    name?: string,
    editable?: BoolType,
    nullable?: BoolType,
    visible?: BoolType,
    visibleInAdd?: BoolType,
    list?: string[],
    type?: "link" | 'editableCell',
    default?: string
}

export type HeadersTableType = {
    [id: string]: HeaderTableType
}

export enum OPERATOR_TABLE_FILTER {
    equal = 'equal',
    start = 'start',
    middle = 'middle',
    end = 'end',
}
export type OperatorType = keyof typeof OPERATOR_TABLE_FILTER
export type TableFilterType = {
    operator: OperatorType,
    expression: string,
}
export type FiltersType = Record<string, TableFilterType>
export type SetTableFilterType = {
    columnName: string,
    filter: TableFilterType
}


export type CallbackOpenManyTextType = {
    id: string,
    link: string,
    rowData: any
}
export type OpenManyTextType = {
    type: 'link' | 'customized'
    callbackOpenManyText?: (props: CallbackOpenManyTextType) => void,
}

declare type EnableRowMenuByValueRowItemType = {
    idRowItem: string,
    valueRowItem: any
}
/**
 *
 */
declare type RowIsReadOnlyType = {
    enableRowMenuByValueRowItem?: EnableRowMenuByValueRowItemType
    rowData: ObjectEnyType,
}
const rowIsReadOnly = ({
    enableRowMenuByValueRowItem,
    rowData
}:RowIsReadOnlyType):boolean => {
    if (enableRowMenuByValueRowItem) {
        const {
            idRowItem,
            valueRowItem
        } = enableRowMenuByValueRowItem
        if (rowData.hasOwnProperty(idRowItem)) {
            return rowData[idRowItem] !== valueRowItem
        }
    }
    return false
}
/**
 * TODO: Разобраться, нужно ли сделать MEMO
 */
declare type GenerateColumnsType = {
    headers: HeadersTableType,
    callbackOpenSubTable?: (idRow:string, rowData: any) => void,
    callbackTrash?: (idRow:string, rowData: any) => void,
    callbackRun?: (idRow:string, rowData: any) => void,
    callbackOpenEditRow?: (idRow:string, rowData: any) => void,
    callbackHandlerFilter?: (value: string, operator: OperatorType, columnKey:string) => void,
    customRowMenuItems?: React.ReactNode,
    rowData?: ObjectEnyType,
    enableRowMenuByValueRowItem?: EnableRowMenuByValueRowItemType,
    menuSettings?: MenuSettingsType
}
export const generateColumns = ({
    headers,
    callbackOpenSubTable,
    callbackTrash,
    callbackRun,
    callbackOpenEditRow,
    callbackHandlerFilter,
    customRowMenuItems,
    menuSettings = menuSettingsDefault,
    rowData,
    enableRowMenuByValueRowItem
}:GenerateColumnsType):IColumn[] => {
    // use for subtable
    // let rowReadOnly: boolean = isEnableRowMenuByValueRowItem({
    //     enableRowMenuByValueRowItem,
    //     rowData
    // })
    //
    let columns: IColumn[] = Object.entries(headers).reduce((acc,[columnKey, settings]) => {
        if(!!!settings.visible) {
            return  acc
        }
        const column: IColumn = {
            key:columnKey,
            title: <div title={settings.name}>{settings.name}</div>,
            hidden: !!!settings.visible,
            sortable: true,
            filter: !!callbackHandlerFilter,
            onFilter:  (value: string, operator?: string) => {
                if (callbackHandlerFilter) {
                    callbackHandlerFilter(value,operator as OperatorType,columnKey)
                }
            },
            wordBreak: true //перенос текста на новую строку,
        }
        if (columnKey === 'id') {
            column.key = 'idKey'
        }
        acc.push(column)
        return acc
    }, [] as IColumn[])
    // columns without hidden
    columns = columns.filter(column => column)
    // MENU
    const menuNotEmpty: boolean = !! (callbackOpenEditRow || callbackTrash || callbackRun || customRowMenuItems)
    if (menuNotEmpty) {
        const menuColumn:IColumn = {
            key: 'menu',
            width: menuSettings.widthColumn
        }
        columns.unshift(menuColumn)
    }
    // OPEN SUB TABLE
    const showMenuOpenSubTable: boolean = !! callbackOpenSubTable
    if (showMenuOpenSubTable) {
        const menuOpenSubTableColumn:IColumn = {
            key: 'openSubTable',
            width: 40
        }
        columns.unshift(menuOpenSubTableColumn)
    }
    //
    /*columns.unshift({
        key: 'count',
        width: 60
    } as IColumn)*/
    //
    return columns
}
/**
 *
 */
declare type GenerateRowsType = {
    index: number,
    rowData: ObjectEnyType,
    callbackOpenSubTable?: (idRow:string, rowData: any) => void,
    headers: HeadersTableType,
    openManyText?: OpenManyTextType,
    callbackTrash?: (idRow:string, rowData: any) => void,
    callbackRun?: (idRow:string, rowData: any) => void,
    callbackOpenEditRow?: (idRow:string, rowData: any) => void,
    callbackHandlerEditCell?: (idRow:string, rowData: any) => void,
    customRowMenuItems?: React.ReactNode,
    enableRowMenuByValueRowItem?: EnableRowMenuByValueRowItemType,
    menuSettings?: MenuSettingsType
}
/**
 * TODO: Разобраться, нужно ли сделать MEMO
 */
export const generateRow = ({
    index,
    rowData,
    headers,
    callbackOpenSubTable,
    callbackOpenEditRow,
    callbackHandlerEditCell,
    callbackTrash,
    callbackRun,
    customRowMenuItems,
    openManyText,
    enableRowMenuByValueRowItem,
    menuSettings
}:GenerateRowsType): IRow => {
    //
    let rowReadOnly: boolean = rowIsReadOnly({
        enableRowMenuByValueRowItem,
        rowData
    })
    //
    const row: any = Object.keys(headers || {}).reduce((acc, key) => {
        const value = rowData[key]
        switch(headers[key].type){
            case 'link':
                if (openManyText) {
                    const {type, callbackOpenManyText} = openManyText
                    const linkIsEmpty: boolean = type === 'link' && !value
                    if(linkIsEmpty) {
                        acc[key] = <IconButton
                          disabled
                          className={s.buttonIcon}
                          icon={<Link/>}
                          view={UI_STYLE_CONFIG.iconButtonView}
                          title={'Нет ссылки'}
                        />
                    } else {
                        acc[key] = <IconButton
                          className={s.buttonIcon}
                          icon={<Link/>}
                          view={UI_STYLE_CONFIG.iconButtonView}
                          color={UI_STYLE_CONFIG.color}
                          onClick={() => callbackOpenManyText?.({id:key, link: value as string, rowData})}
                        />
                    }

                }
                break
            case 'editableCell':
                if (callbackHandlerEditCell) {
                    acc[key] = <EditableCell
                        key={`${index}_${value}`}
                        idRow={index.toString()}
                        idCell={key}
                        value={value}
                        rowData={rowData}
                        callbackHandlerEditCell={callbackHandlerEditCell}
                    />
                } else {
                    acc[key] = value
                }
                break
            default:
                acc[key] = value
                break
        }
        return acc
    }, {} as any)
    const newRow:IRow = {
        id: index.toString(),
        ...row,
    }
    newRow.key = `row_${index}`
    if (row.id) {
        newRow.idKey = row.id.toString()
    }
    if (!rowReadOnly) {
        const canEdit: boolean = convert_1_0_toBool(rowData.trigger_ind)
        const canRun: boolean = convert_1_0_toBool(rowData.trigger_ind)
        const canDelete: boolean = convert_1_0_toBool(rowData.delete_ind)
        const menuNotEmpty: boolean = !! ((canEdit && callbackOpenEditRow) || (canDelete && callbackTrash) || (canRun && callbackRun) || customRowMenuItems)
        if (menuNotEmpty) {
            newRow.menu = <RowMenu
                idRow={index.toString()}
                rowData={rowData}
                callbackEdit={canEdit ? callbackOpenEditRow : null!}
                сustomMenuItems={customRowMenuItems}
                callbackTrash={canDelete ? callbackTrash :  null!}
                callbackRun={canRun ? callbackRun : null!}
                menuSettings={menuSettings}
            />
        }
        const showMenuOpenSubTable: boolean = !! callbackOpenSubTable
        if(showMenuOpenSubTable) {
            newRow.openSubTable = <OpenSubTable
              idRow={index.toString()}
              rowData={rowData}
              callbackOpenSubTable={callbackOpenSubTable}
            />
        }
    }
    //newRow.count = index
    // console.log(' >>>> newRow:')
    // console.log(newRow)
    return newRow
}
