import crypto from 'crypto';

export const generateMDS = (value: string): string => {
  return crypto.createHash('md5').update(value).digest('hex');
};
