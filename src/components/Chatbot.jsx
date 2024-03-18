import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment, Icon } from 'semantic-ui-react';

const Chatbot = () => {
  const [user, setUser] = useState('');


  const steps = [
    {
      id: '1',
      message: 'Welcome to Xprios Survey Tool!',
      trigger: 'getName',
    },
    {
      id: 'getName',
      message: 'Please enter your name.',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'greetUser',
    },
    {
      id: 'greetUser',
      message: ({ previousValue }) => {
        setUser(previousValue);
        return `Hi ${previousValue}! How can I assist you today?`;
      },
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 1, label: 'Survey Creation', trigger: 'surveyCreation' },
        { value: 2, label: 'Dashboards', trigger: 'dashboards' },
        { value: 3, label: 'Response Collection', trigger: 'responseCollection' },
      
        { value: 4, label: 'Feature 4', trigger: 'feature4' },
        { value: 5, label: 'Feature 5', trigger: 'feature5' },
        { value: 'end', label: 'End Chat', trigger: 'endChat' },
      ],
      trigger: ({ value }) => value && !user, 
    },
    {
      id: 'surveyCreation',
      message: 'Xprios Survey Tool allows you to easily create surveys using a variety of questions. How can I help you with survey creation?',
      trigger: 'options',
    },
    {
      id: 'dashboards',
      message: 'Empower your decision-making process with dynamic dashboards that provide swift access to vital insights. How can I help you with dashboards?',
      trigger: 'options',
    },
    {
      id: 'responseCollection',
      message: 'Gather responses in real-time and monitor survey progress. Users receive instant notifications upon new responses. How can I assist you further with response collection?',
      trigger: 'options',
    },
    {
      id: 'feature4',
      message: 'This is Feature 4. How can I assist you with it?',
      trigger: 'options',
    },
    {
      id: 'feature5',
      message: 'Welcome to Feature 5. How can I assist you with it?',
      trigger: 'options',
    },
    {
      id: 'endChat',
      message: 'Thank you for interacting with Xprios Survey Tool. If you have more questions, feel free to ask!',
      end: true,
    },
  ];

  return (
    <div>
      
    
        <Segment style={{ position: 'fixed', bottom: 80, right: 20, zIndex: 1000 }}>
          <ChatBot steps={steps} />
        </Segment>
      
    </div>
  );
};

export default Chatbot;
