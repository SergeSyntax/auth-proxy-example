import React from 'react';
import { Field, Form, Formik } from 'formik';
import { ValuesDueDateTask } from './values.interface';
import { renameTaskValidationSchema } from './schema';
import { FieldTitleTask } from './field';
import { useDueDateTask } from './use-due-date-task.hook';
import { TaskRes } from '../task-res.interface';
import { LabelTask } from '../label';
import { GrClock } from 'react-icons/gr';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import {format} from 'date-fns'
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import ruLocale from 'date-fns/locale/ru';

import { TextField } from '@material-ui/core';
import locale from 'date-fns/locale/en-US';
import { DatePicker, TimePicker } from '@material-ui/lab';

interface Props {
  task: TaskRes;
}

export const DueDateTask = ({ task }: Props) => {
  const { mutateAsync, isLoading } = useDueDateTask();
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [time, setTime] = React.useState<Date | null>(new Date());

  return (
    <Formik<ValuesDueDateTask>
      validationSchema={renameTaskValidationSchema}
      initialValues={{ dueDate: task.dueDate || '', taskId: task.id }}
      onSubmit={async values => {
        await mutateAsync(values);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form
            style={{ display: 'flex', flexDirection: 'column', maxWidth: '40rem' }}
            autoComplete="off"
            noValidate
          >
            <LabelTask icon={GrClock} label="due date" name="dueDate" />
            <div style={{ display: 'flex' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label="Date"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  mask="__/__/____"
                  value={value}
                  onChange={newValue => {
                    setValue(newValue);
                  }}
                  renderInput={params => <TextField {...params} />}
                />

                <TimePicker
                  ampm={false}
                  openTo="hours"
                  views={['hours', 'minutes', 'seconds']}
                  inputFormat="HH:mm"
                  mask="__:__"
                  label="Hour"
                  value={time}
                  onChange={newValue => {
                    setTime(newValue);
                  }}
                  renderInput={params => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>

            {/* <Field
              autoFocus
              multiline
              onBlur={handleSubmit}
              size="medium"
              fullWidth
              name="dueDate"
              component={FieldTitleTask}
            /> */}
          </Form>
        );
      }}
    </Formik>
  );
};
