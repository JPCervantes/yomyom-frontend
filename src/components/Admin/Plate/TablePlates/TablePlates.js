import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { CategoryName } from '../CategoryName';
import { map } from 'lodash';
import './TablePlates.scss';


export function TablePlates(props) {
    const { plates, updatePlate, onDeletePlate } = props;


  return (
    <div>
       <Table className="plates-admin__container">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                  platillo
              </Table.HeaderCell>              
              <Table.HeaderCell>
                  Precio
              </Table.HeaderCell>         
              <Table.HeaderCell>
                  Categoría
              </Table.HeaderCell>
              <Table.HeaderCell>
                  Activo
              </Table.HeaderCell>
              <Table.HeaderCell>

              </Table.HeaderCell>
            </Table.Row>
            </Table.Header>
          <Table.Body>
            {map(plates, (item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {item.name}
                </Table.Cell>
                <Table.Cell>
                  $ {item.price}
                </Table.Cell>
                <Table.Cell>
                  <CategoryName categoryId = {item.categoryId}/>
                </Table.Cell>
                <Table.Cell>
                  {item.active ? <Icon name='check' /> : <Icon name='close' /> }
                </Table.Cell>
                    <Actions 
                        plate = {item}
                        updatePlate={updatePlate}
                        onDeletePlate={onDeletePlate}
                    />
              </Table.Row>
            ))}
          </Table.Body>

        </Table>
      </div>
  )
}


function Actions(props) {
    const { plate, updatePlate, onDeletePlate } = props;

    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick={() => updatePlate(plate)} >
                <Icon name="pencil" />
            </Button>
            <Button icon negative onClick={() => onDeletePlate(plate)} >
                <Icon name="close" />
            </Button>
        </Table.Cell>
    )
}