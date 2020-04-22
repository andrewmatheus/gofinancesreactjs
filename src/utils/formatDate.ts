import { format } from 'date-fns';

const formatDate = (date: Date): string => format(new Date(date), 'dd/MM/yyyy');

export default formatDate;
