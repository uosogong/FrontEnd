import { useAtom } from 'jotai';
import { tokenAtom } from '../store/tokenAtom';

const useUser = () => {
  const [user, setUser] = useAtom(tokenAtom);

  const setUserInfo = (userInfo) => {
    setUserInfo(userInfo);
  };

  const getUserInfo = () => {
    return userInfo;
  };

  const deleteUserInfo = () => {
    setUserInfo('');
  };

  return { setUserInfo, getUserInfo, deleteUserInfo };
};

export default useUser;
