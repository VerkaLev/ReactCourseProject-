import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { urlInput } from '../../Consts/index';
import { dataStateInputs, stateInputsIsLoading } from '../../Ducks/selectors';
import { InputWithStyles } from './Helpers/getInputWithStyles';
import { Dispatch } from 'react';
import { deleteInputs } from '../../Ducks/Actions/actionsInputs';
import { ActionInputType, InputType } from '../../Ducks/Types/inputTypes';

export const Inputs = () => {
  const dataStateInputsArr: InputType[] = useSelector(dataStateInputs) || [];
  const dispatch: Dispatch<ActionInputType> = useDispatch();
  const isLoading: boolean = useSelector(stateInputsIsLoading);
  const handleDeleteClick = (id: string) => {
    dispatch(deleteInputs(urlInput, id));
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">loading ...</div>
      ) : (
        dataStateInputsArr.map((item: InputType) => (
          <div className="button_edit_delete">
            <InputWithStyles
              placeholder="write here"
              key={item.id}
              id={item.id}
              className="button_with_styles"
              props={item}
            />
            <div className="container_edit_delete_buy">
              <Link
                to={{
                  pathname: `/menu/inputs/editElement:${item.id}`,
                  state: item,
                }}
              >
                <div id={item.id} className="btn_edit" />
              </Link>

              <div
                onClick={() => handleDeleteClick(item.id)}
                id={item.id}
                className="delete"
              />

              <div id={item.id} className="btn_buy"></div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
