import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import './styles.css';
import Select from '../../components/Select';

function TeacherList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  function searchTeachers(e: FormEvent) {
    e.preventDefault();
    console.log('passei aqui');
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select
            name='subject'
            label='Matéria'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Educação Física', label: 'Educação Física' },
            ]}
          />
          <Select
            name='week_day'
            label='Dia da semana'
            value={week_day}
            onChange={(e) => {
              setWeek_day(e.target.value);
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type='time'
            name='time'
            label='Hora'
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          ></Input>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
