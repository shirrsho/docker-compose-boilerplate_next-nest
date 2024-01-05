import axios from 'axios'

const baseUrl = 'http://nestjs_backend:4000'

export async function create(url: string, values: object) {
  const response = await axios.post(`${baseUrl}/${url}`, { ...values });
  return response.data;
}

export async function getall(url: string) {
  const response = await axios.get(`${baseUrl}/${url}`);
  return response.data;
}

export async function get(url: string, id: string) {
  const response = await axios.get(`${baseUrl}/${url}/${id}`);
  return response.data;
}

export async function update(url: string, id: string, values: any) {
  return axios.put(`${baseUrl}/${url}/${id}`, {
    ...values,
  });
}

export async function remove(url: string, id: string | undefined) {
  return axios.delete(`${baseUrl}/${url}/${id}`);
}