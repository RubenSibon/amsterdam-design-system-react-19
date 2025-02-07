import { Button, Checkbox, Column, FieldSet, Grid, Heading, Paragraph } from "@amsterdam/design-system-react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { BackLink } from "../_components/BackLink";
import { useFormContext } from "../FormContext";
import { docTitle } from "../../constants";
import { useNavigate } from "@remix-run/react";

function Contact2() {
  const { register, handleSubmit } = useForm();
  const { formData, updateFormData } = useFormContext();

  const navigate = useNavigate();

  const onSubmit = (data: {}) => {
    updateFormData(data);
    navigate("/signalen/documenten");
  };

  useEffect(() => {
    document.title = "Stap 2 van 4, gegevens - Gemeente Amsterdam";

    return () => {
      document.title = docTitle;
    };
  }, []);

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb--xs" href="/signalen/contact-1">
          Vorige vraag
        </BackLink>
        <Column className="ams-mb--md">
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap--xs">
            <Heading level={2}>Gegevens</Heading>
            <Paragraph>Stap 2 van 4</Paragraph>
          </hgroup>
        </Column>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <FieldSet
            id="permissionGroup"
            aria-labelledby="permissionGroup permissionDescription"
            legend="Mogen we uw melding doorsturen? (niet verplicht)"
          >
            <Paragraph className="ams-mb--sm" id="permissionDescription" size="small">
              Soms kan de gemeente niets doen. Een andere organisatie moet dan aan het werk. Als dat zo is kunnen wij uw
              melding soms doorsturen. Wij sturen uw telefoonnummer of e-mailadres mee. Maar dat doen we alleen als u
              dat goed vindt.
            </Paragraph>
            <Checkbox
              id="permission"
              {...register("permission")}
              defaultChecked={formData.permission as boolean | undefined}
            >
              Ja, ik geef de gemeente Amsterdam toestemming om mijn melding door te sturen naar andere organisaties als
              de melding niet voor de gemeente is bestemd.
            </Checkbox>
          </FieldSet>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  );
}

export default Contact2;
