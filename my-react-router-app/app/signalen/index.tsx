import {
  Button,
  CharacterCount,
  Column,
  ErrorMessage,
  Field,
  FormErrorList,
  Grid,
  Heading,
  Label,
  Paragraph,
  TextArea,
} from "@amsterdam/design-system-react";
import { useForm, useWatch } from "react-hook-form";
import { useEffect } from "react";
import { formatErrors } from "./_utils/formatErrors";
import { useFormContext } from "./FormContext";
import { docTitle } from "../constants";
import { useNavigate } from "react-router";

function Home() {
  const { formData, updateFormData } = useFormContext();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldFocusError: false });

  const body = useWatch({
    control,
    name: "body",
    defaultValue: formData.body || "",
  });

  const navigate = useNavigate();
  const onSubmit = (data: {}) => {
    updateFormData(data);
    navigate("/signalen/vul-aan-1");
  };

  useEffect(() => {
    document.title = "Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam";

    return () => {
      document.title = docTitle;
    };
  }, []);

  const formattedErrors = formatErrors(errors);

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Column className="ams-mb--md">
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap--xs">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
          <FormErrorList errors={formattedErrors} />
        </Column>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Field invalid={Boolean(errors.body)}>
            <Label htmlFor="body">Waar gaat het om?</Label>
            <Paragraph id="bodyDescription" size="small">
              Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
            </Paragraph>
            {errors.body && <ErrorMessage id="bodyError">{`${errors.body.message}`}</ErrorMessage>}
            <TextArea
              aria-describedby={`bodyDescription${errors.body ? " bodyError" : ""}`}
              aria-required="true"
              defaultValue={formData.body}
              id="body"
              invalid={Boolean(errors.body)}
              rows={4}
              {...register("body", {
                required: "Geef aan waar uw melding over gaat.",
                maxLength: {
                  value: 1000,
                  message: "Beschrijf uw melding in minder dan 1000 tekens.",
                },
              })}
            />
            <CharacterCount length={body.length} maxLength={1000} />
          </Field>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  );
}

export default Home;
