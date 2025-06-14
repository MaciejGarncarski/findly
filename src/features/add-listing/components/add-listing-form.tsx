import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import Form from "next/form";

export function AddListingForm() {
  return (
    <Dialog.Root motionPreset="slide-in-bottom" placement={"center"}>
      <Dialog.Trigger asChild>
        <Button variant="solid" size="sm">
          Add Listing
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Add Listing</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Text color="fg.muted">
                Create a new listing to promote your ad, job opening, or item
                for sale. Fill in the details below to reach potential buyers or
                applicants.
              </Text>
              <Form action="/">
                <Fieldset.Root size="lg" maxW="md">
                  <Stack>
                    <Fieldset.Legend>Contact details</Fieldset.Legend>
                    <Fieldset.HelperText>
                      Please provide your contact details below.
                    </Fieldset.HelperText>
                  </Stack>

                  <Fieldset.Content>
                    <Field.Root>
                      <Field.Label>Name</Field.Label>
                      <Input name="name" />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label>Email address</Field.Label>
                      <Input name="email" type="email" />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label>Country</Field.Label>
                      <NativeSelect.Root>
                        <NativeSelect.Field name="country">
                          <For
                            each={["United Kingdom", "Canada", "United States"]}
                          >
                            {(item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            )}
                          </For>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                      </NativeSelect.Root>
                    </Field.Root>
                  </Fieldset.Content>

                  <Button type="submit" alignSelf="flex-start">
                    Submit
                  </Button>
                </Fieldset.Root>
              </Form>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
