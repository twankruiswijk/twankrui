import { FC } from 'react';
import { AlertComponentPropsWithStyle } from 'react-alert';

const Alert: FC<AlertComponentPropsWithStyle> = ({ style, message, close }) => {
  return (
    <div
      style={style}
      className="p-3 rounded-md bg-green-600 font-medium shadow-primary"
    >
      {message}
      <button onClick={close} className="ml-2 font-semibold">
        x
      </button>
    </div>
  );
};

export default Alert;
