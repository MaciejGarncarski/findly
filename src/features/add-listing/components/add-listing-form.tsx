import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Form from "next/form";

export function AddListingForm() {
  return (
    <Form action="/">
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>Add Listing</Fieldset.Legend>
          <Fieldset.HelperText>
            Create a new listing to promote your ad, job opening, or item for
            sale. Fill in the details below to reach potential buyers or
            applicants.
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Listing name</Field.Label>
            <Input name="listing-name" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Location</Field.Label>
            <Input name="location" />
          </Field.Root>
        </Fieldset.Content>

        <Field.Root>
          <Field.Label>Description</Field.Label>
          <Textarea name="description" />
        </Field.Root>

        <Button type="submit" alignSelf="flex-start">
          Submit
        </Button>
      </Fieldset.Root>
    </Form>
  );
}
