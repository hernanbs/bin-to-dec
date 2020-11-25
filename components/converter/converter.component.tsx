import { useState } from 'react';

import { Badge, Button, Card, Form, InputGroup, Toast } from 'react-bootstrap';
import style from './index.module.css';
import Converter from '../../utils/converter';

type Props = {
  titulo: string;
  subtitle: string;
  nameValueIn: string;
  nameValueOut: string;
  placeholderIn: string;
  placeholderOut: string;
  typeInput: string;
  styleClass: string;
};

function ConverterComponent({
  titulo,
  subtitle,
  nameValueIn,
  nameValueOut,
  placeholderIn,
  placeholderOut,
  typeInput,
  styleClass,
}: Props) {
  // States
  const [outputValue, setOutputValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  // OnClick
  const handleConverterClick = () => {
    if (inputValue) {
      let newValue: string;
      switch (typeInput) {
        case 'binary':
          newValue = Converter.binaryToDecimal(inputValue).toString();
          break;
        case 'decimal':
          newValue = Converter.decimalToBinary(inputValue);
          break;
        default:
          newValue = inputValue;
      }
      setOutputValue(newValue);
    }
  };
  // OnChange
  const handleBinaryStateChange = e => {
    const { value } = e.target;
    let regex: RegExp;
    switch (typeInput) {
      case 'binary':
        regex = /^[0|1]*$/g;
        break;
      case 'decimal':
        regex = /^[0-9]*$/g;
        break;
      default:
        regex = /^/;
    }
    if (regex.test(value)) {
      setInputValue(value);
    } else {
      const errorMessage = `${'Número '}${value} possui algarismos invalidos`;
      setMessage(errorMessage);
    }
  };

  return (
    <>
      <Card border="info" className={styleClass}>
        <Card.Header>
          <Card.Title>{titulo}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        </Card.Header>

        <Card.Body>
          <Badge variant="primary" className={style.badgeMargin}>
            {nameValueIn}
          </Badge>
          <Card.Text>
            <div>
              <InputGroup className="mb-3">
                {/* Input de binario */}
                <Form.Control
                  type="text"
                  value={inputValue}
                  onChange={handleBinaryStateChange}
                  placeholder={placeholderIn}
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-primary"
                    onClick={handleConverterClick}
                  >
                    Converter
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Card.Text>
          <Badge variant="success" className={style.badgeMargin}>
            {nameValueOut}
          </Badge>
          <Card.Text>
            <div>
              <Form.Text className={style.txtForm}>
                {outputValue || placeholderOut}
              </Form.Text>
            </div>
          </Card.Text>
          <Toast
            className={style.toast}
            onClose={() => setMessage('')}
            show={!!message}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <strong className="mr-auto">{message}</strong>
            </Toast.Header>
          </Toast>
        </Card.Body>
      </Card>
    </>
  );
}

export default ConverterComponent;
