import {Button, Card, CardProps, H2, Paragraph, StackProps} from 'tamagui';
import {Sun} from '@tamagui/lucide-icons';

type CityCardProps = {
  name: string;
  timeDifference: number;
  props?: CardProps;
};

const WorldClockCard = ({name, timeDifference, props}: CityCardProps) => {
  const GetTimeDifferenceText = (time: number) => {
    if (time > 1) {
      return time + ' hours ahead';
    }

    if (time < -1) {
      return time + ' hours behind';
    }

    let resultText;
    switch (time) {
      case 1:
        resultText = '1 hour ahead';
        break;
      case -1:
        resultText = '1 hour behind';
        break;
      default:
        resultText = 'Local time zone';
        break;
    }

    return resultText;
  };

  return (
    <Card {...props}>
      <Card.Header padded>
        <H2>{name}</H2>
        <Paragraph theme="alt2">
          {GetTimeDifferenceText(timeDifference)}
        </Paragraph>
      </Card.Header>
      {<Button icon={Sun} pressStyle={buttonStyle} />}
      <Card.Background />
    </Card>
  );
};

const buttonStyle: StackProps = {
  disabled: true,
};

export default WorldClockCard;
