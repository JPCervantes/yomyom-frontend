import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { map } from 'lodash';
import './TableCategory.scss';


export function TableCategory(props) {
    const { categories, updateCategory, onDeleteCategory } = props;

  return (
    <div>
       <Table className="categories-admin__container">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                  Categoría
              </Table.HeaderCell>              
              <Table.HeaderCell>
                  Horario
              </Table.HeaderCell>         
              <Table.HeaderCell>
                  Activo
              </Table.HeaderCell>  
              <Table.HeaderCell>

              </Table.HeaderCell>
            </Table.Row>
            </Table.Header>
          <Table.Body>
            {map(categories, (item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {item.name}
                </Table.Cell>
                <Table.Cell>
                  {item.timestart} - {item.timeend}
                </Table.Cell>
                <Table.Cell>
                  {item.active ? <Icon name='check' /> : <Icon name='close' /> }
                </Table.Cell>
                    <Actions 
                        category = {item}
                        updateCategory={updateCategory}
                        onDeleteCategory={onDeleteCategory}
                    />
              </Table.Row>
            ))}
          </Table.Body>

        </Table>
      </div>
  )
}


function Actions(props) {
    const { category, updateCategory, onDeleteCategory } = props;

    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick={() => updateCategory(category)} >
                <Icon name="pencil" />
            </Button>
            <Button icon negative onClick={() => onDeleteCategory(category)} >
                <Icon name="close" />
            </Button>
        </Table.Cell>
    )
}