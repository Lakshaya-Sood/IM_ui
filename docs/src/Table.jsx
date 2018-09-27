import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
  } from 'material-ui/Table'

export default class PropsTable extends React.Component {
  render () {
    const tableRows = this.props.rows.map((item) => (
      <TableRow>
        <TableRowColumn style={{width: '20%', color: '#005FFF'}}>{item.name}</TableRowColumn>
        <TableRowColumn style={{color: '#E03305', width: '20%'}}>{item.type}</TableRowColumn>
        <TableRowColumn style={{width: '20%'}}>{item.defaultValue}</TableRowColumn>
        <TableRowColumn>{item.description}</TableRowColumn>
      </TableRow>
        ))

    return (
      <Table wrapperStyle={{fontSize: '16px'}} >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{width: '20%'}}>Name</TableHeaderColumn>
            <TableHeaderColumn style={{width: '20%'}}>Type</TableHeaderColumn>
            <TableHeaderColumn style={{width: '20%'}}>Default</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          { tableRows }
        </TableBody>
      </Table>
    )
  }
  }
