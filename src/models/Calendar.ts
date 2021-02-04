export default interface Calendar {
  errorCode: number;
  errorMessage: string | null;
  datos: CalendarData[];
}

interface CalendarData {
  fecha: number;
  tipoId: string;
  tipoDs: string;
  color: string;
}
