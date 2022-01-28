import { axios } from '../core/axios';

export interface UploadImageReturnProps {
  height: number;
  width: number;
  size: number;
  url: string;
}

export const updateImages = async (image: File): Promise<UploadImageReturnProps> => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
