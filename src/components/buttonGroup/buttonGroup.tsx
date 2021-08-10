import React from "react"
import {Button} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {unblockedForm} from "../../redux/reducers/app/actions"
import {getBlockedForm} from "../../redux/reducers/selectors/selectors"

interface Props {
  onCancel: (e?: any) => void
  onSave: (e?: any) => void
}

export function ButtonGroup({onCancel, onSave}: Props) {
  const formIsBlocked = useSelector(getBlockedForm)
  const dispatch = useDispatch()

  let HTML: JSX.Element = (
    <React.Fragment>
      <Button variant="primary" type="button" className={`m-2`} onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="primary" type="button" className={`m-2`} onClick={onSave}>
        Save
      </Button>
    </React.Fragment>
  )

  if (formIsBlocked)
    HTML = (
      <Button
        variant="primary"
        type="button"
        className={`mt-2`}
        onClick={() => {
          dispatch(unblockedForm())
        }}>
        Edit
      </Button>
    )
  return HTML
}
