import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createNewBlock, sendBlocks } from '../../Ducks/Actions/actionsBlocks';
import { nanoid } from 'nanoid';
import { dataStateBlocksCreated } from '../../Ducks/selectors';
import { urlBlock } from '../../Consts';
import { AccType, LocalState } from '../../Ducks/Types/types';
import { Dispatch } from 'react';

import { ActionBlockType } from '../../Ducks/Types/blockTypes';

export const FormBlock = () => {
  const dispatch: Dispatch<ActionBlockType> = useDispatch();

  const dataPostBlocks: AccType = useSelector(dataStateBlocksCreated);
  const history = useHistory();

  const [state, setState] = useState<LocalState>({
    id: nanoid(),
    name: 'exapmle',
  });
  const [stateBoxShadow, setStateBoxShadow] = useState({});
  const [stateHover, setStateHover] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent & {
      target: { name: string; value: string };
    }
  ) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    dispatch(createNewBlock({ display: 'none', id: '', name: '' }, ''));

    return dispatch(sendBlocks(urlBlock, dataPostBlocks));
  };

  const handleDeleteClick = () => {
    dispatch(createNewBlock({ display: 'none', id: '', name: '' }, ''));
    history.push('/menu/blocks');
  };

  const handleParamChange = (
    e: React.ChangeEvent & {
      target: { name: string; value: string };
    }
  ) => {
    setStateBoxShadow({
      ...stateBoxShadow,

      [e.target.name]: e.target.value,
    });
  };

  const handleShadowClick = () => {
    const shadow = Object.values(stateBoxShadow).join(' ');
    setState({
      ...state,
      'box-shadow': shadow,
    });
  };

  const handleHoverChange = (
    e: React.ChangeEvent & {
      target: { name: string; value: string };
    }
  ) => {
    setStateHover({
      ...stateHover,

      [e.target.name]: e.target.value,
    });
  };

  const handleHoverClick = () => {
    setState({
      ...state,
      '&:hover': stateHover,
    });
  };

  useEffect(() => {
    dispatch(
      createNewBlock(
        state,
        state === { display: 'none', id: '', name: '' } ? '' : 'Block'
      )
    );
  }, [state]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form_with_styles">
        <p className="header_create_new">create new block</p>
        <div className="style_block">
          <div>background-color</div>

          <input
            type="color"
            name="background-color"
            onChange={handleChange}
          ></input>
        </div>

        <div className="style_block">
          <div>width</div>
          <input
            placeholder="example: 1px"
            name="width"
            onChange={handleChange}
          />
        </div>

        <div className="style_block">
          <div>border-radius</div>
          <input
            placeholder="example: 1px"
            name="border-radius"
            onChange={handleChange}
          />
        </div>
        <div className="style_block">
          <div>height</div>
          <input
            placeholder="example: 1px"
            name="height"
            onChange={handleChange}
          />
        </div>

        <div className="style_block">
          <div>color</div>
          <input name="color" type="color" onChange={handleChange}></input>
        </div>

        <div className="style_block">
          <div>border</div>
          <div className="properties_border">
            <input
              onChange={handleChange}
              name="border-width"
              className="inputBorderPx"
              placeholder="example: 1px"
            />
            <select onChange={handleChange} name="border-style">
              <option>none</option>
              <option>dotted</option>
              <option>dashed</option>
              <option>solid</option>
              <option>double</option>
            </select>
            <input
              onChange={handleChange}
              name="border-color"
              type="color"
              className="input_color"
            />
          </div>
        </div>

        <div className="style_block">
          <div>shadow</div>
          <div className="properties_box_shadow">
            <input
              onChange={handleParamChange}
              name="parameters"
              placeholder="examle: 1px 1px 1px 1px"
            ></input>
            <input
              onChange={handleParamChange}
              name="shadowColor"
              type="color"
            ></input>
            <button onClick={handleShadowClick}>ok</button>
          </div>
        </div>

        <div className="hover">
          hover: <button onClick={handleHoverClick}>ok</button>
        </div>

        <div className="style_block">
          <div>background-color</div>
          <input
            onChange={handleHoverChange}
            name="background-color"
            type="color"
          />
        </div>

        <div className="style_block">
          <div>color</div>
          <input name="color" type="color" onChange={handleHoverChange}></input>
        </div>

        <div className="style_block">
          <div>border</div>
          <div className="properties_border">
            <input
              onChange={handleHoverChange}
              name="border-width"
              className="inputBorderPx"
              placeholder="example: 1px"
            />
            <select onChange={handleHoverChange} name="border-style">
              <option>none</option>
              <option>dotted</option>
              <option>dashed</option>
              <option>solid</option>
              <option>double</option>
            </select>
            <input
              onChange={handleHoverChange}
              name="border-color"
              type="color"
              className="input_color"
            />
          </div>
        </div>

        <div className="block_save">
          <Link to="/menu/blocks">
            <button className="btn_ok_x_form" onClick={handleClick}>
              OK
            </button>
          </Link>

          <button className="btn_ok_x_form" onClick={handleDeleteClick}>
            X
          </button>
        </div>
      </form>
    </>
  );
};
