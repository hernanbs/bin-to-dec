import ConverterComponent from '../../components/converter/converter.component';

import style from './bin.module.css';

function Bin2DecComponent() {
  return (
    <>
      <div className={style.converterbox}>
        <ConverterComponent
          titulo="Bin2Dec"
          subtitle="Conversor de número Binário em Decimal"
          nameValueIn="Binário"
          nameValueOut="Decimal"
          placeholderIn="Número Binário"
          placeholderOut="Número Decimal"
          typeInput="binary"
          styleClass={style.converterStyle}
        />
        <ConverterComponent
          titulo="Dec2Bin"
          subtitle="Conversor de número Decimal em Binário"
          nameValueIn="Decimal"
          nameValueOut="Binário"
          placeholderIn="Número Decimal"
          placeholderOut="Número Binário"
          typeInput="decimal"
          styleClass={style.converterStyle}
        />
      </div>
    </>
  );
}

export default Bin2DecComponent;
