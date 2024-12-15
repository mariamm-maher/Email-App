import axios from 'axios';

const BASE_URL = 'https://*******/api/emails'; //putting here the api url

export const fetchEmails = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching emails:', error);
    return [];
  }
};

export const trashEmail = async (id) => {
  try {
    await axios.post(`${BASE_URL}/trash`, { id });
  } catch (error) {
    console.error('Error trashing email:', error);
  }
};

export const fetchTrashedEmails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trash`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trashed emails:', error);
    return [];
  }
};

export const markAsSpam = async (id) => {
  try {
    await axios.post(`${BASE_URL}/spam`, { id });
  } catch (error) {
    console.error('Error marking email as spam:', error);
  }
};

export const fetchSpamEmails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/spam`);
    return response.data;
  } catch (error) {
    console.error('Error fetching spam emails:', error);
    return [];
  }
};

export const starEmail = async (id) => {
  try {
    await axios.post(`${BASE_URL}/starred`, { id });
  } catch (error) {
    console.error('Error starring email:', error);
  }
};

export const fetchStarredEmails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/starred`);
    return response.data;
  } catch (error) {
    console.error('Error fetching starred emails:', error);
    return [];
  }
};

export const saveAsDraft = async (id) => {
  try {
    await axios.post(`${BASE_URL}/draft`, { id });
  } catch (error) {
    console.error('Error saving email as draft:', error);
  }
};

export const fetchDraftEmails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/draft`);
    return response.data;
  } catch (error) {
    console.error('Error fetching draft emails:', error);
    return [];
  }
};
