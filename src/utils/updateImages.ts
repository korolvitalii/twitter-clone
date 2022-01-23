import { axios } from '../core/axios';

export const updateImages = async (image: any) => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
