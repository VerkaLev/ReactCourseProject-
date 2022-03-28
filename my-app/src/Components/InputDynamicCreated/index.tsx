import { nanoid } from 'nanoid';

import { InputWithStylesCreated } from './Helpers/getInputWithStylesCreated';

export const InputDynamicCreated = () => {
  return (
    <InputWithStylesCreated className="btn_with_styles_created" id={nanoid()} />
  );
};
