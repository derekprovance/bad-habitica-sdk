import axios, { Axios } from 'axios';
import { Task } from '../models/Task';

export class HabiticaRepository {
  HABITICA_URL = 'https://habitica.com'; //TODO - Make this config driven
  private conn: Axios;

  constructor(apiUser, apiKey) {
    this.conn = axios.create({
      headers: {
        "x-api-key": apiKey,
        "x-api-user": apiUser
      }
    })
  }

  async getTasks(): Promise<Array<Task>> {
    const results = await this.conn.get(`${this.HABITICA_URL}/api/v3/tasks/user`);

    return results.data?.data;
  }

  async addTask(payload: Task): Promise<Task> {
    const results = await this.conn.post(`${this.HABITICA_URL}/api/v3/tasks/user`, payload);

    return results.data?.data;
  }

  async updateTask(taskId: number, payload: Task): Promise<Task> {
    const results = await this.conn.put(`${this.HABITICA_URL}/api/v3/tasks/${taskId}`, payload)

    return results.data?.data;
  }
}
