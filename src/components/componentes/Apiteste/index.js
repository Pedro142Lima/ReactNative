



import React from 'react';
import { View , Text} from 'react-native'


import axios from 'axios';

export default function Api(){
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Substitua pela URL do seu servidor backend
    axios.get('http://localhost:3000/dados')
      .then(response => setDados(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      {dados.map(dado => (
        <Text key={dado.id}>{dado.nome}</Text>
      ))}
    </View>
  );
};
