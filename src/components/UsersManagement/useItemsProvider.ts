import {useEffect, useState} from 'react';
import getUserItems, {IItem} from '../../services/getUserItems';

const useItemsProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<String>();
  const [items, setItems] = useState<Array<IItem>>([])

  const fetch = async () => {
      setIsLoading(true);

      try {
        const userItems = await getUserItems();

        setItems(userItems);
      } catch (error) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    }
  
  useEffect(() => {
    fetch();
  }, []);

  return {
    isLoading,
    errorMessage,
    items,
    fetch
  }
};

export default useItemsProvider;
