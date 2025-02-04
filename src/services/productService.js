import api from "../api/axios";


export const createProduct = async (productData) => {
  try {
    const response = await api.post('/produto', productData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};
