import { Button, Column, FieldSet, Grid, Heading, Paragraph, Radio } from "@amsterdam/design-system-react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { BackLink } from "../_components/BackLink";
import { useFormContext } from "../FormContext";
import { docTitle } from "../../constants";
import { useNavigate } from "@remix-run/react";

function VulAan1() {
  const { register, handleSubmit } = useForm();
  const { formData, updateFormData } = useFormContext();

  const navigate = useNavigate();

  const onSubmit = (data: { when?: any }) => {
    updateFormData(data);
    navigate(data.when === "eerder" ? "/signalen/vul-aan-1b" : "/signalen/vul-aan-2");
  };

  useEffect(() => {
    document.title = "Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam";

    return () => {
      document.title = docTitle;
    };
  }, []);

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb--xs" href="/signalen">
          Vorige vraag
        </BackLink>
        <Column className="ams-mb--md">
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap--xs">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
        </Column>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <FieldSet legend="Wanneer heeft u de overlast? (niet verplicht)" role="radiogroup">
            <Column gap="extra-small">
              <Radio value="nu" {...register("when")} defaultChecked={formData.when === "nu"}>
                Nu
              </Radio>
              <Radio value="eerder" {...register("when")} defaultChecked={formData.when === "eerder"}>
                Eerder
              </Radio>
            </Column>
          </FieldSet>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  );
}

export default VulAan1;
