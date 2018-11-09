import * as React from 'react'

import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

import * as styles from './styles.scss'

interface IToolbarComponentProps {
  onAddClick: Function
}

export const ToolbarComponent = (props: IToolbarComponentProps) => {
  return (
    <div className={styles.toolbar}>
      <Button
        variant='contained'
        color='primary'
        aria-label='Add'
        className={styles.toolbarButton}
        onClick={props.onAddClick}
      >
        Add Chart
        <AddIcon className={styles.toolbarIcon} />
      </Button>
    </div>
  )
}

export const Toolbar = ToolbarComponent
