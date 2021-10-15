import { Alert } from 'react-native';

type Param = {
  title: string;
  msg: string;
  cancelCb?: () => void;
  onDismiss?: () => void;
};

export const showAlert = ({ title, msg }: Param) => {
  return Alert.alert(title, msg);
};
