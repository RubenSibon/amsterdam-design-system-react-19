import { Heading, Paragraph, Column, Button, Link, Grid } from "@amsterdam/design-system-react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { BackLink } from "../_components/BackLink";
import { useFormContext } from "../FormContext";

import "../_components/SummaryDescriptionList/summary-description-list.css";
import "./edit-link.css";
import { capitalizeFirstLetter } from "../_utils/capitalizeFirstLetter";
import { docTitle } from "../../constants";
import { useNavigate } from "react-router";

const questions = [
  {
    id: "body",
    questionText: "Waar gaat het om?",
    href: "/signalen",
  },
  {
    id: "when",
    questionText: "Wanneer heeft u de overlast?",
    href: "/signalen/vul-aan-1",
  },
  {
    id: "whenDay",
    questionText: "Welke dag was het?",
    href: "/signalen/vul-aan-1b",
  },
  {
    id: "whenTime",
    questionText: "Hoe laat was het?",
    href: "/signalen/vul-aan-1c",
  },
  {
    id: "type",
    questionText: "Welk afval is verkeerd neergezet?",
    href: "/signalen/vul-aan-2",
  },
  {
    id: "who",
    questionText: "Weet u wie de eigenaar is van het verkeerd geplaatste afval?",
    href: "/signalen/vul-aan-3",
  },
  {
    id: "phone",
    questionText: "Wat is uw telefoonnummer?",
    href: "/signalen/contact-1",
  },
  {
    id: "mail",
    questionText: "Wat is uw e-mailadres?",
    href: "/signalen/contact-1",
  },
  {
    id: "permission",
    questionText: "Mogen we uw melding doorsturen?",
    href: "/signalen/contact-2",
  },
  {
    id: "files",
    questionText: "Heeft u een bestand om toe te voegen?",
    href: "/signalen/documenten",
  },
];

interface FormData {
  files?: { [key: string]: { name: string } };
  permission?: boolean;
  mail?: string;
  [key: string]: any;
}

const formatAnswer = (id: string, formData: FormData) => {
  switch (id) {
    case "files":
      return formData?.files && formData?.files["0"]?.name;
    case "permission":
      return formData?.permission ? "Ja" : "Nee";
    case "mail":
      return formData?.mail;
    default:
      return formData[id] && capitalizeFirstLetter(formData[id] as string);
  }
};

function Summary() {
  const { formData } = useFormContext();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const onSubmit = () => navigate("/signalen/bedankt");

  useEffect(() => {
    document.title = "Stap 4 van 4, samenvatting - Gemeente Amsterdam";

    return () => {
      document.title = docTitle;
    };
  }, []);

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 9 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb--xs" href="/signalen/documenten">
          Vorige vraag
        </BackLink>
        <Column>
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap--xs">
            <Heading level={2}>Samenvatting</Heading>
            <Paragraph>Stap 4 van 4</Paragraph>
          </hgroup>
          <Paragraph>Controleer de onderstaande gegevens.</Paragraph>
          <dl className="ams-summary-description-list ams-gap--sm">
            {questions.map(({ id, questionText, href }) => {
              // Don't show whenX questions if when is now
              if ((id === "whenDay" || id === "whenTime") && formData.when === "nu") return undefined;

              return (
                <div key={id} className="ams-summary-description-list__container">
                  <dt className="ams-summary-description-list__term ams-mb--xs">{questionText}</dt>
                  <dd className="ams-summary-description-list__description" dir="auto">
                    {formatAnswer(id, formData) || "Niet ingevuld"}
                  </dd>
                  <dd className="ams-summary-description-list__link">
                    <Link href={href} variant="inline" className="ams-edit-link">
                      Wijzig
                      <span className="ams-visually-hidden"> vraag: {questionText}</span>
                    </Link>
                  </dd>
                </div>
              );
            })}
          </dl>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" value="true" {...register("answers-checked")} />
            <Button type="submit">Verstuur melding</Button>
          </form>
        </Column>
      </Grid.Cell>
    </Grid>
  );
}

export default Summary;
