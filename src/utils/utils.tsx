import { format, parseISO } from "date-fns";

export const formatDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, "MMMM do',' yyyy 'at' HH:mm");
  } catch (error) {
    return "Invalid date";
  }
};
