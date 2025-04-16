import {
  Box,
  Badge,
  Card,
  Heading,
  Flex,
  Text,
  Button,
  Link,
} from "@radix-ui/themes";

export default function PricingSection() {
  return (
    <section className="container tablet:mb-8">
      <div className="flex w-full max-w-[100%] items-end gap-6  tablet:flex-row">
        <Box>
          <Card>
            <Badge className="mb-2">Most popular!</Badge>
            <Flex gap="5" className="mb-3">
              <Heading weight="bold" size="6">
                Ko-Fi Gold 🥇
              </Heading>
              <Text weight="regular" size="5">
                €22,00/mo
              </Text>
            </Flex>
            <Flex as="div" direction="column" gap="2" className="mb-3">
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
            </Flex>

            <Button asChild variant="classic">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Subscribe
              </a>
            </Button>
          </Card>
        </Box>
        <Box>
          <Card>
            <Badge className="mb-2">Most popular!</Badge>
            <Flex gap="5" className="mb-3">
              <Heading weight="bold" size="6">
                Ko-Fi Gold 🥇
              </Heading>
              <Text weight="regular" size="5">
                €22,00/mo
              </Text>
            </Flex>
            <Flex as="div" direction="column" gap="2" className="mb-3">
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
            </Flex>
            <Button variant="classic">Subscribe</Button>
          </Card>
        </Box>
        <Box>
          <Card>
            <Badge className="mb-2">Most popular!</Badge>
            <Flex gap="5" className="mb-3">
              <Heading weight="bold" size="6">
                Ko-Fi Gold 🥇
              </Heading>
              <Text weight="regular" size="5">
                €22,00/mo
              </Text>
            </Flex>
            <Flex as="div" direction="column" gap="2" className="mb-3">
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
            </Flex>
            <Button variant="classic">Subscribe</Button>
          </Card>
        </Box>
        <Box>
          <Card>
            <Badge className="mb-2">Most popular!</Badge>
            <Flex gap="5" className="mb-3">
              <Heading weight="bold" size="6">
                Ko-Fi Gold 🥇
              </Heading>
              <Text weight="regular" size="5">
                €22,00/mo
              </Text>
            </Flex>
            <Flex as="div" direction="column" gap="2" className="mb-3">
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
              <Flex as="span" align="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <Text size="2">High-resolution image generation</Text>
              </Flex>
            </Flex>
            <Button variant="classic">Subscribe</Button>
          </Card>
        </Box>
      </div>
    </section>
  );
}
