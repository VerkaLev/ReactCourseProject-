import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewBlock, editBlocks } from '../../Ducks/Actions/actionsBlocks';
import { Link, useHistory } from 'react-router-dom';
import { dataStateBlocksCreated } from '../../Ducks/selectors';
import { urlBlock } from '../../Consts';

import {
  ActionBlockType,
  BlockStateHoverType,
} from '../../Ducks/Types/blockTypes';
import { AccType } from '../../Ducks/Types/types';

export const FormEditBlock = () => {
  const dispatch: Dispatch<ActionBlockType> = useDispatch();
  const dataPostBlocks: AccType = useSelector(dataStateBlocksCreated);
  const history = useHistory();
  const { location } = useHistory();
  const { state }: any = location;
  const [stateForm, setStateForm] = useState(state);
  const [stateBoxShadow, setStateBoxShadow] = useState({});
  const [stateHover, setStateHover] = useState<BlockStateHoverType>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent & {
      target: { name: string; value: string };
    }
  ) => {
    setStateForm({
      ...stateForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleOkClick = () => {
    console.log(stateForm);
    dispatch(createNewBlock({ display: 'none', id: '', name: '' }, ''));

    return dispatch(editBlocks(urlBlock, dataPostBlocks));
  };

  const handleDeleteClick = () => {
    dispatch(createNewBlock({ display: 'none', id: '', name: '' }, ''));
    history.push('/menu/blocks');
  };

  const handleParamChange = (
    e: React.ChangeEvent<HTMLInputElement> & {
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
    setStateForm({
      ...stateForm,
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
    setStateForm({
      ...stateForm,
      '&:hover': stateHover,
    });
  };
  useEffect(() => {
    dispatch(
      createNewBlock(
        stateForm,
        stateForm === { display: 'none', id: '', name: '' } ? '' : 'Button'
      )
    );
  }, [stateForm]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form_with_styles">
        <p className="header_create_new">edit block</p>
        <div className="style_block">
          <div>background-color</div>
          <input
            type="color"
            name="background-color"
            value={stateForm['background-color'] || '#000000'}
            onChange={handleChange}
          ></input>
        </div>

        <div className="style_block">
          <div>width</div>
          <input
            placeholder="example: 1px"
            name="width"
            value={stateForm.width}
            onChange={handleChange}
          />
        </div>

        <div className="style_block">
          <div>border-radius</div>
          <input
            placeholder="example: 1px"
            name="border-radius"
            value={stateForm['border-radius']}
            onChange={handleChange}
          />
        </div>
        <div className="style_block">
          <div>height</div>
          <input
            placeholder="example: 1px"
            name="height"
            value={stateForm.height}
            onChange={handleChange}
          />
        </div>

        <div className="style_block">
          <div>color</div>
          <input
            type="color"
            name="color"
            value={stateForm.color || '#000000'}
            onChange={handleChange}
          ></input>
        </div>

        <div className="style_block">
          <div>border</div>
          <div className="properties_border">
            <input
              name="border-width"
              className="inputBorderPx"
              placeholder="example: 1px"
              value={stateForm['border-width']}
              onChange={handleChange}
            />
            <select
              name="border-style"
              value={stateForm['border-style'] || 'none'}
              onChange={handleChange}
            >
              <option>none</option>
              <option>dotted</option>
              <option>dashed</option>
              <option>solid</option>
              <option>double</option>
            </select>
            <input
              name="border-color"
              type="color"
              className="inputColor"
              onChange={handleChange}
              value={stateForm['border-color'] || '#000000'}
            />
          </div>
        </div>

        <div className="style_block">
          <div>shadow</div>
          <div className="properties_box_shadow">
            <input
              name="parameters"
              placeholder="examle: 1px 1px 1px 1px"
              onChange={handleParamChange}
            ></input>
            <input
              name="color"
              type="color"
              onChange={handleParamChange}
            ></input>
            <button name="box-shadow" onClick={handleShadowClick}>
              ok
            </button>
          </div>
        </div>

        <div className="hover">
          hover: <button onClick={handleHoverClick}>ok</button>
        </div>

        <div className="style_block">
          <div>background-color</div>
          <input
            value={
              stateForm['&:hover'] === undefined
                ? ''
                : stateForm['&:hover']['background-color']
            }
            onChange={handleHoverChange}
            name="background-color"
            type="color"
          />
        </div>

        <div className="style_block">
          <div>color</div>
          <input
            type="color"
            name="color"
            value={
              stateForm['&:hover'] === undefined
                ? '#000000'
                : stateForm['&:hover'].color
            }
            onChange={handleHoverChange}
          ></input>
        </div>

        <div className="style_block">
          <div>border</div>
          <div className="properties_border">
            <input
              value={
                stateForm['&:hover'] === undefined
                  ? ''
                  : stateForm['&:hover']['border-width']
              }
              onChange={handleHoverChange}
              name="border-width"
              className="inputBorderPx"
              placeholder="example: 1px"
            />
            <select
              onChange={handleHoverChange}
              value={
                stateForm['&:hover'] === undefined
                  ? ''
                  : stateForm['&:hover']['border-style']
              }
              name="border-style"
            >
              <option>none</option>
              <option>dotted</option>
              <option>dashed</option>
              <option>solid</option>
              <option>double</option>
            </select>
            <input
              value={
                stateForm['&:hover'] === undefined
                  ? ''
                  : stateForm['&:hover']['border-color']
              }
              onChange={handleHoverChange}
              name="border-color"
              type="color"
              className="input_color"
            />
          </div>
        </div>

        <div className="block_save">
          <Link to="/menu/blocks">
            <button className="btn_ok_x_form" onClick={handleOkClick}>
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
