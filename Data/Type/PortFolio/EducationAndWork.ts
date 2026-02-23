export type EduWorkHistory = {
  heading?: string;
  subHeading?: string;
  date?: string;
  title?: string;
  description?: string;
};

export type EduWorkProps = {
  mainTitle?: string;
  mainDescription?: string;
  eduWorkHistory?: EduWorkHistory[];
};
