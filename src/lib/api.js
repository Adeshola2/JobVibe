import { jobs } from "../data/jobs";

export const api = {
  async getJobs() {
    await new Promise((r) => setTimeout(r, 250));
    return jobs;
  },
  async getJob(id) {
    await new Promise((r) => setTimeout(r, 200));
    return jobs.find((job) => String(job.id) === String(id));
  },
  async apply(payload) {
    await new Promise((r) => setTimeout(r, 400));
    return { id: Date.now(), status: "Under review", ...payload };
  },
};