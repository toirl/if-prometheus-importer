export type YourGlobalConfig = {
  url: string;
  start: string;
  end: string;
  step: number;
  query: string[];
};

export function newYourGlobalConfig(
  url: string,
  start?: string,
  end?: string,
  step?: number,
  query?: string[]
): YourGlobalConfig {
  if (end === undefined) {
    end = new Date().toISOString();
  } else {
    try {
      end = new Date(end).toISOString();
    } catch (e) {
      throw new Error('Invalid date format');
    }
  }

  if (start === undefined) {
    const dtstart = new Date(end);
    dtstart.setHours(dtstart.getHours() - 1);
    start = dtstart.toISOString();
  } else {
    try {
      start = new Date(start).toISOString();
      if (start > end) {
        throw new Error('Start date must before end date');
      }
    } catch (e) {
      throw new Error('Invalid date format');
    }
  }

  if (step === undefined) {
    step = 60;
  }

  if (query === undefined) {
    query = ['cpu-util', 'mem-util', 'mem-total'];
  }
  return {url: url, start: start, end: end, step: step, query: query};
}
