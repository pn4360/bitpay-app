import React from 'react';
import {Path, Svg} from 'react-native-svg';

const InfoSvg: React.FC<{bgColor: string; size: number}> = ({
  bgColor,
  size,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.9249 14.113L13.1881 6.30341H10.8042L11.0673 14.113H12.9249ZM11.9961 17.6966C12.3728 17.6966 12.676 17.5857 12.9056 17.3638C13.1352 17.1419 13.25 16.8607 13.25 16.5201C13.25 16.1744 13.1352 15.8906 12.9056 15.6687C12.676 15.4469 12.3728 15.3359 11.9961 15.3359C11.6246 15.3359 11.324 15.4481 11.0944 15.6726C10.8648 15.8971 10.75 16.1796 10.75 16.5201C10.75 16.8607 10.8648 17.1419 11.0944 17.3638C11.324 17.5857 11.6246 17.6966 11.9961 17.6966Z"
        fill={bgColor}
      />
    </Svg>
  );
};

const InfoIcon = ({
  bgColor = '#1F3AB3',
  size = 20,
}: {
  bgColor?: string;
  size?: number;
}) => {
  return <InfoSvg bgColor={bgColor} size={size} />;
};

export default InfoIcon;
