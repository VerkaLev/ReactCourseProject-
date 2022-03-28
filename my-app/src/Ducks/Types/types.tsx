import { InputType } from './inputTypes';

export type ErrorPasword = string;
export type ValueState = {
  [key: string]: string;
};

export type PropsMenu = {
  url: string;
};

export type LocalState = {
  id: string;
  name: string;
  [key: string]: string | { [key: string]: string };
};

export type PropsStyles = {
  props: InputType;
  placeholder: string;
  id: string;
  className: string;
};

export type AccType = {
  [key: string]: string | { [key: string]: string };
};

export type Props = {
  props: {
    [key: string]: string | { [key: string]: string };
    id: string;
    name: string;
  };
};

export type PropsShop = {
  props: {
    [key: string]: string | { [key: string]: string };
  };
};
