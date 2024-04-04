import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Img, Heading, RatingBar, Slider } from "../../components";

export default function HomePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>lambe</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div>
          <header className="flex items-center justify-center bg-white-A700 p-3">
            <div className="mx-auto flex w-full max-w-[1139px] items-center justify-between gap-5 md:flex-col">
              <Heading as="h1" className="!text-deep_purple-900">
                <span className="text-deep_purple-900">lambe</span>
                <span className="text-pink-300">.</span>
              </Heading>
              <div className="flex w-[62%] items-center justify-between gap-5 md:w-full md:flex-col">
                <ul className="flex flex-wrap gap-9">
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-gray-900">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-gray-900">
                        About Us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-gray-900">
                        Services
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-gray-900">
                        Career
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-gray-900">
                        Contact Us
                      </Text>
                    </a>
                  </li>
                </ul>
                <Button
                  color="deep_purple_A400"
                  size="lg"
                  shape="round"
                  className="min-w-[187px] font-medium uppercase tracking-[0.72px] sm:px-5"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </header>
          <div className="flex items-start justify-center bg-white-A700 px-14 pt-16 md:flex-col md:px-5 md:pt-5">
            <div className="relative z-[1] mt-2 flex w-[44%] flex-col gap-[34px] md:w-full">
              <div className="flex flex-col items-start gap-4">
                <Text
                  size="xs"
                  as="p"
                  className="flex h-[24px] items-center justify-center rounded-[12px] border border-solid border-deep_purple-A400 bg-gray-100 px-4 py-[3px] uppercase !text-deep_purple-A400"
                >
                  Lambe - Digital Marketing Service
                </Text>
                <Heading as="h1" className="leading-[76px] !text-gray-900">
                  Boost Your Online Presence with Digital Marketing Services
                </Heading>
              </div>
              <div className="flex items-center justify-between gap-5 pr-[127px] md:pr-5 sm:flex-col">
                <Text size="2xl" as="p" className="w-[32%] self-end leading-9 !text-gray-900 sm:w-full">
                  December Stats.
                </Text>
                <div className="flex w-[60%] items-center justify-between gap-5 sm:w-full">
                  <div className="flex flex-col items-start">
                    <Heading size="xs" as="h2" className="!text-blue_gray-900">
                      7M +
                    </Heading>
                    <Text as="p" className="!text-blue_gray-500">
                      Monthly visits
                    </Text>
                  </div>
                  <div className="flex flex-col items-start">
                    <Heading size="xs" as="h3" className="!text-blue_gray-900">
                      3,1 M
                    </Heading>
                    <Text as="p" className="!text-blue_gray-500">
                      Social followers
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ml-[-10px] flex w-[42%] items-center justify-center md:ml-0 md:w-full sm:flex-col">
              <div className="flex flex-1 items-start sm:flex-col sm:self-stretch">
                <div className="relative z-[3] mt-[22px] h-[114px] w-[41%] sm:w-full">
                  <div className="absolute bottom-[0.00px] right-[0.00px] m-auto flex w-[94%] items-start justify-center gap-3.5 rounded-[12px] bg-pink-300 p-[7px]">
                    <Heading as="h4" className="mb-1">
                      3X
                    </Heading>
                    <Text size="xs" as="p" className="w-[69%] leading-5">
                      Commodo est vitae sit et et. Lorem felis.
                    </Text>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="absolute left-[0.00px] top-[0.00px] m-auto flex h-[24px] items-center justify-center rounded-[12px] bg-blue-500 px-4 py-0.5"
                  >
                    Super
                  </Text>
                </div>
                <div className="relative ml-[-187px] flex-1 rounded-tl-[16px] rounded-tr-[16px] bg-gray-900 sm:ml-0 sm:self-stretch">
                  <div className="h-[518px] rounded-tl-[16px] rounded-tr-[16px] bg-blue_gray-900" />
                </div>
              </div>
              <div className="relative z-[2] mb-[174px] ml-[-50px] flex w-[16%] flex-col items-center gap-[19px] self-end rounded-md bg-gray-100 pt-[18px] sm:ml-0 sm:w-full">
                <Img src="images/img_activity.svg" alt="activity_one" className="h-[24px] w-[24px]" />
                <div className="flex justify-center self-stretch bg-gray-900">
                  <Text size="xl" as="p" className="self-end text-center !text-gray-100">
                    98,6%
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 bg-deep_purple-900 p-16 md:flex-col md:p-5">
          <div className="ml-[86px] flex w-[33%] justify-center rounded-lg bg-gray-100 md:ml-0 md:w-full md:p-5">
            <div className="h-[214px] w-full rounded-lg bg-blue_gray-900" />
          </div>
          <div className="mr-[102px] flex w-[62%] justify-between gap-5 md:mr-0 md:w-full md:flex-col">
            <div className="flex w-[41%] flex-col gap-8 md:w-full">
              <div className="flex items-center justify-between gap-5">
                <Text as="p" className="self-end">
                  Google Rating
                </Text>
                <div className="flex w-[19%] items-center justify-center gap-1.5">
                  <Img src="images/img_star_1.svg" alt="image" className="h-[24px] w-[24px] rounded-[1px]" />
                  <Text as="p" className="self-start">
                    4.8
                  </Text>
                </div>
              </div>
              <div className="flex flex-col">
                <Heading size="md" as="h2">
                  128,000 +
                </Heading>
                <Text size="s" as="p" className="leading-7">
                  customers in over 120 countries growing their businesses with Lambe
                </Text>
              </div>
            </div>
            <div className="h-full w-px bg-deep_purple-700 md:h-px md:w-full" />
            <div className="flex w-[44%] flex-col gap-6 md:w-full">
              <div className="flex w-[69%] items-center justify-between gap-5 md:w-full">
                <div className="w-[31%] rounded-[30px] bg-gray-900">
                  <div className="h-[60px] w-[60px] rounded-[30px] bg-blue_gray-900" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <Text as="p" className="mt-0.5">
                    Michael Nguyen
                  </Text>
                  <Text size="xs" as="p" className="!text-deep_purple-A100">
                    Business Owner
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <Text size="2xl" as="p">
                  Strategic Planning
                </Text>
                <Text size="s" as="p" className="leading-7">
                  This digital marketing agency provided strategic planning that aligned with our business objectives.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-32 bg-white-A700 px-14 py-24 md:gap-24 md:p-5 sm:gap-16">
          <div className="mx-auto flex w-full max-w-[1140px] gap-[69px] border-b-[0.5px] border-solid border-blue_gray-100 md:flex-col">
            <div className="flex w-full items-start gap-5">
              <Button shape="circle" className="w-[60px] !rounded-[30px] border border-solid border-pink-300">
                <Img src="images/img_settings.svg" />
              </Button>
              <div className="flex flex-1 flex-col items-start gap-3 pt-2.5">
                <Text size="2xl" as="p" className="!text-gray-900">
                  Digital Marketing
                </Text>
                <Text as="p" className="leading-8 !text-blue_gray-500">
                  Elementum venenatis ornare. Sollicitudin mauris.
                </Text>
              </div>
            </div>
            <div className="flex w-full items-start gap-5">
              <Button shape="circle" className="w-[60px] !rounded-[30px] border border-solid border-pink-300">
                <Img src="images/img_settings.svg" />
              </Button>
              <div className="flex flex-1 flex-col items-start gap-[15px] pt-[7px]">
                <Text size="2xl" as="p" className="!text-gray-900">
                  Social Media
                </Text>
                <Text as="p" className="leading-8 !text-blue_gray-500">
                  Elementum venenatis ornare. Sollicitudin mauris.
                </Text>
              </div>
            </div>
            <div className="flex w-full items-start gap-5">
              <Button shape="circle" className="w-[60px] !rounded-[30px] border border-solid border-pink-300">
                <Img src="images/img_settings.svg" />
              </Button>
              <div className="flex flex-1 flex-col items-start gap-3 pt-2.5">
                <Text size="2xl" as="p" className="!text-gray-900">
                  Creative Branding
                </Text>
                <Text as="p" className="leading-8 !text-blue_gray-500">
                  Elementum venenatis ornare. Sollicitudin mauris.
                </Text>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[1140px] gap-10 md:flex-col">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <Text
                  size="xs"
                  as="p"
                  className="flex h-[24px] items-center justify-center rounded-[12px] border border-solid border-deep_purple-A400 bg-gray-100 px-4 py-[3px] uppercase !text-deep_purple-A400"
                >
                  About us
                </Text>
                <Heading as="h2" className="leading-[76px] !text-gray-900">
                  Helping Millions Grow Better Since 2010
                </Heading>
                <Text as="p" className="leading-8 !text-blue_gray-500">
                  Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna
                  adipiscing. In lorem lacus quis egestas tincidunt neque ut accumsan.
                </Text>
              </div>
              <Button
                color="deep_purple_A400"
                size="lg"
                shape="round"
                className="min-w-[181px] font-medium uppercase tracking-[0.72px] sm:px-5"
              >
                Learn More
              </Button>
            </div>
            <div className="w-full rounded-[12px] bg-gray-900">
              <div className="h-[389px] rounded-[12px] bg-blue_gray-900" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-16 bg-gray-100 px-14 pt-[70px] md:px-5 md:pt-5 sm:gap-8">
          <div className="mx-auto mt-[26px] flex w-full max-w-[935px] flex-col items-center gap-[13px] px-2">
            <Text
              size="xs"
              as="p"
              className="flex h-[24px] items-center justify-center rounded-[12px] border border-solid border-deep_purple-A400 bg-gray-100 px-4 py-[3px] uppercase !text-deep_purple-A400"
            >
              Our Services
            </Text>
            <Heading as="h2" className="text-center !text-gray-900">
              Elevate Your Digital Presence Today
            </Heading>
            <Text as="p" className="w-[86%] text-center leading-8 !text-blue_gray-500 md:w-full">
              Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. In
              lorem lacus quis egestas tincidunt neque ut accumsan.
            </Text>
          </div>
          <div className="relative mx-auto h-[488px] w-full max-w-[1300px] self-stretch rounded-tl-[32px] rounded-tr-[32px] bg-white-A700 md:p-5">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex w-full flex-col gap-[30px] px-20 md:relative md:px-5">
              <div className="flex flex-1 justify-between gap-5 md:flex-col">
                <div className="flex w-full items-start justify-center gap-5">
                  <Button color="gray_50" shape="circle" className="w-[60px] !rounded-[30px]">
                    <Img src="images/img_vector.svg" />
                  </Button>
                  <div className="flex flex-1 flex-col items-start gap-3 pt-2.5">
                    <Text size="2xl" as="p" className="!text-gray-900">
                      Digital Strategy
                    </Text>
                    <Text as="p" className="leading-8 !text-blue_gray-500">
                      Elementum venenatis ornare. Sollicitudin mauris.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full items-start justify-center gap-5">
                  <Button color="gray_50" shape="circle" className="w-[60px] !rounded-[30px]">
                    <Img src="images/img_vector.svg" />
                  </Button>
                  <div className="flex flex-1 flex-col items-start gap-3 pt-2.5">
                    <Text size="2xl" as="p" className="!text-gray-900">
                      Content Planning
                    </Text>
                    <Text as="p" className="leading-8 !text-blue_gray-500">
                      Elementum venenatis ornare. Sollicitudin mauris.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full items-start justify-center gap-5">
                  <Button color="gray_50" shape="circle" className="w-[60px] !rounded-[30px]">
                    <Img src="images/img_vector.svg" />
                  </Button>
                  <div className="flex flex-1 flex-col items-start gap-3 pt-2.5">
                    <Text size="2xl" as="p" className="!text-gray-900">
                      Graphic Design
                    </Text>
                    <Text as="p" className="leading-8 !text-blue_gray-500">
                      Elementum venenatis ornare. Sollicitudin mauris.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-gradient" />
              <div className="flex flex-1 justify-between gap-5 md:flex-col">
                <div className="flex w-full items-start justify-center gap-5">
                  <Button color="gray_50" shape="circle" className="w-[60px] !rounded-[30px]">
                    <Img src="images/img_vector.svg" />
                  </Button>
                  <div className="flex flex-1 flex-col items-start gap-3 pt-2.5">
                    <Text size="2xl" as="p" className="!text-gray-900">
                      Website Design
                    </Text>
                    <Text as="p" className="leading-8 !text-blue_gray-500">
                      Elementum venenatis ornare. Sollicitudin mauris.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full items-start justify-center gap-5">
                  <Button color="gray_50" shape="circle" className="w-[60px] !rounded-[30px]">
                    <Img src="images/img_vector.svg" />
                  </Button>
                  <div className="flex flex-1 flex-col items-start gap-3 pt-2.5">
                    <Text size="2xl" as="p" className="!text-gray-900">
                      Storytelling
                    </Text>
                    <Text as="p" className="leading-8 !text-blue_gray-500">
                      Elementum venenatis ornare. Sollicitudin mauris.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full items-start justify-center gap-5">
                  <Button color="gray_50" shape="circle" className="w-[60px] !rounded-[30px]">
                    <Img src="images/img_vector.svg" />
                  </Button>
                  <div className="flex flex-1 flex-col items-start gap-3 pt-2.5">
                    <Text size="2xl" as="p" className="!text-gray-900">
                      Copywriting
                    </Text>
                    <Text as="p" className="leading-8 !text-blue_gray-500">
                      Elementum venenatis ornare. Sollicitudin mauris.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[31%] justify-between gap-5">
              <div className="h-full w-px bg-gradient" />
              <div className="h-full w-px bg-gradient" />
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-blue_gray-900 px-14 py-[214px] md:p-5">
          <Button color="gray_50" size="xl" shape="circle" className="w-[120px] !rounded-[60px]">
            <Img src="images/img_overflow_menu.svg" />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-[86px] bg-white-A700 px-14 py-24 md:gap-16 md:p-5 sm:gap-[43px]">
          <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[51%] items-center justify-center md:w-full sm:flex-col">
              <div className="h-[503px] flex-1 rounded-[12px] bg-blue_gray-900 sm:self-stretch" />
              <div className="relative mb-28 ml-[-102px] flex w-[30%] flex-col items-start self-end rounded-lg bg-deep_purple-900 p-5 sm:ml-0 sm:w-full">
                <div className="relative h-[101px] w-[89%]">
                  <Heading as="h2" className="absolute bottom-[-0.57px] right-[0.00px] m-auto text-center">
                    20K+
                  </Heading>
                  <Button
                    size="sm"
                    shape="circle"
                    className="absolute left-[0.00px] top-[0.00px] m-auto w-[32px] !rounded-[16px]"
                  >
                    <Img src="images/img_settings.svg" />
                  </Button>
                </div>
                <Text size="s" as="p" className="mb-[25px] self-center !text-blue_gray-50">
                  Project Done
                </Text>
              </div>
            </div>
            <div className="flex w-[44%] flex-col gap-8 md:w-full">
              <div className="flex flex-col items-start gap-4">
                <Text
                  size="xs"
                  as="p"
                  className="flex h-[24px] items-center justify-center rounded-[12px] border border-solid border-deep_purple-A400 bg-gray-100 px-4 py-[3px] uppercase !text-deep_purple-A400"
                >
                  Why Choose us
                </Text>
                <Heading as="h3" className="leading-[76px] !text-gray-900">
                  Choose Us to Grow Your Business
                </Heading>
                <Text as="p" className="leading-8 !text-blue_gray-500">
                  Placerat sed enim felis arcu. Placerat aliquam amet eleifend sollicitudin mauris. Nibh sit diam vitae
                  velit cras elit eget.
                </Text>
              </div>
              <div className="flex flex-col items-start gap-[22px]">
                <div className="flex items-center gap-3">
                  <Button size="sm" shape="circle" className="w-[32px] self-start !rounded-[16px]">
                    <Img src="images/img_settings.svg" />
                  </Button>
                  <Text size="xl" as="p" className="!text-blue_gray-900">
                    Results-Driven Approach
                  </Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button size="sm" shape="circle" className="w-[32px] self-start !rounded-[16px]">
                    <Img src="images/img_settings.svg" />
                  </Button>
                  <Text size="xl" as="p" className="!text-blue_gray-900">
                    Expertise in Multiple Platforms
                  </Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button size="sm" shape="circle" className="w-[32px] self-start !rounded-[16px]">
                    <Img src="images/img_settings.svg" />
                  </Button>
                  <Text size="xl" as="p" className="!text-blue_gray-900">
                    Continuous Optimization
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[1140px] border-b-[0.5px] border-solid border-blue_gray-100 pb-14 md:pb-5">
            <div className="w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 2 }, 1050: { items: 5 } }}
                renderDotsItem={(props) => {
                  return props?.isActive ? (
                    <div className="mr-[2.84px] h-[24px] w-[24px] bg-blue_gray-500" />
                  ) : (
                    <div className="mr-[2.84px] h-[24px] w-[24px] bg-blue_gray-500" />
                  );
                }}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(15)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <Img src="images/img_logo_client_1.svg" alt="logoclientone" className="mx-2.5 h-[62px]" />
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[69px] bg-deep_purple-900 px-14 py-24 md:p-5 sm:gap-[34px]">
          <div className="mx-auto flex w-full max-w-[1140px] justify-between gap-5 md:flex-col">
            <div className="flex w-[51%] flex-col gap-[27px] md:w-full">
              <div className="flex flex-col items-start gap-2">
                <Text
                  size="xs"
                  as="p"
                  className="flex h-[24px] items-center justify-center rounded-[12px] border border-solid border-deep_purple-A400 bg-gray-100 px-4 py-[3px] uppercase !text-deep_purple-A400"
                >
                  Testimonial
                </Text>
                <Heading as="h2">Customers Review</Heading>
              </div>
              <div className="flex items-center justify-between gap-5 sm:flex-col">
                <div className="flex flex-col items-start gap-3">
                  <Text size="2xl" as="p">
                    Total Reviews
                  </Text>
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-[15px]">
                      <Heading size="md" as="h3">
                        122 K{" "}
                      </Heading>
                      <Button
                        color="blue_500"
                        size="xs"
                        rightIcon={
                          <Img src="images/img_arrowupcircle.svg" alt="arrow-up-circle" className="h-[12px] w-[12px]" />
                        }
                        className="mt-[11px] min-w-[72px] gap-1 rounded-[12px] font-medium"
                      >
                        24%
                      </Button>
                    </div>
                    <Text as="p" className="relative mt-[-1px] !text-blue_gray-100">
                      Pulvinar commodo arcu
                    </Text>
                  </div>
                </div>
                <div className="flex w-[48%] flex-col items-start gap-2 sm:w-full">
                  <Text size="2xl" as="p">
                    Average Rating
                  </Text>
                  <div className="flex flex-col items-start self-stretch">
                    <div className="flex items-start gap-6 self-stretch">
                      <Heading size="md" as="h4">
                        4.8
                      </Heading>
                      <RatingBar
                        value={4}
                        isEditable={true}
                        color="#ee46bc"
                        activeColor="#ee46bc"
                        size={32}
                        className="mt-[11px] flex flex-1 justify-between rounded-[1px]"
                      />
                    </div>
                    <Text as="p" className="relative mt-[-1px] !text-blue_gray-100">
                      Pulvinar commodo arcu
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[42%] justify-center rounded-[12px] bg-gray-900 md:w-full">
              <div className="h-[326px] w-full rounded-[12px] bg-blue_gray-900" />
            </div>
          </div>
          <div className="mx-auto h-px w-full max-w-[1140px] bg-deep_purple-700 md:p-5" />
          <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-[83px]">
            <div className="flex flex-1 items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[85%] items-start justify-between gap-5 md:w-full md:flex-col">
                <div className="flex w-[38%] items-start justify-center gap-6 md:w-full">
                  <div className="mt-1 w-[29%] rounded-lg bg-gray-900">
                    <div className="h-[100px] w-[100px] rounded-lg bg-blue_gray-900" />
                  </div>
                  <div className="flex flex-col items-start gap-[3px]">
                    <Text size="2xl" as="p">
                      Jessica Davis
                    </Text>
                    <Text as="p" className="!text-blue_gray-100">
                      Marketing Manager
                    </Text>
                    <Text size="s" as="p" className="!text-blue_gray-100">
                      24-10-2022
                    </Text>
                  </div>
                </div>
                <div className="mt-[3px] flex w-[56%] flex-col items-start gap-3 md:w-full">
                  <Text size="2xl" as="p">
                    Results-Driven Approach
                  </Text>
                  <Text as="p" className="leading-8 !text-blue_gray-50">
                    A enim quis eget adipiscing fermentum. Euismod gravida massa vel nibh. Tempor euismod pellentesque
                    adipiscing ac elementum pellentesque quam sed nulla. Curabitur turpis et eu arcu in nulla. Ultricies
                    eu consequat nibh in eu eget. Mi.
                  </Text>
                </div>
              </div>
              <div className="mt-1 flex gap-[13px]">
                <Img src="images/img_thumbs_up.svg" alt="jessica_davis" className="h-[24px] w-[24px]" />
                <Img src="images/img_thumbs_down.svg" alt="jessica_davis" className="h-[24px] w-[24px]" />
              </div>
            </div>
            <div className="flex flex-1 items-start justify-between gap-5 border-t-[0.5px] border-solid border-deep_purple-700 md:flex-col">
              <div className="flex w-[85%] items-start justify-between gap-5 md:w-full md:flex-col">
                <div className="flex w-[38%] items-start justify-center gap-6 md:w-full">
                  <div className="mt-1 w-[29%] rounded-lg bg-gray-900">
                    <div className="h-[100px] w-[100px] rounded-lg bg-blue_gray-900" />
                  </div>
                  <div className="flex flex-col items-start gap-[3px]">
                    <Text size="2xl" as="p">
                      John Smith
                    </Text>
                    <Text as="p" className="!text-blue_gray-100">
                      Business Owner
                    </Text>
                    <Text size="s" as="p" className="!text-blue_gray-100">
                      24-10-2022
                    </Text>
                  </div>
                </div>
                <div className="mt-[3px] flex w-[56%] flex-col items-start gap-3 md:w-full">
                  <Text size="2xl" as="p">
                    Innovative Strategies
                  </Text>
                  <Text as="p" className="leading-8 !text-blue_gray-50">
                    A enim quis eget adipiscing fermentum. Euismod gravida massa vel nibh. Tempor euismod pellentesque
                    adipiscing ac elementum pellentesque quam sed nulla. Curabitur turpis et eu arcu in nulla. Ultricies
                    eu consequat nibh in eu eget. Mi.
                  </Text>
                </div>
              </div>
              <div className="mt-1 flex gap-[13px]">
                <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[24px] w-[24px]" />
                <Img src="images/img_thumbs_down.svg" alt="thumbsdown_one" className="h-[24px] w-[24px]" />
              </div>
            </div>
            <div className="flex flex-1 items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[85%] items-start justify-between gap-5 md:w-full md:flex-col">
                <div className="flex w-[38%] items-center justify-center gap-6 md:w-full">
                  <div className="w-[29%] rounded-lg bg-gray-900">
                    <div className="h-[100px] w-[100px] rounded-lg bg-blue_gray-900" />
                  </div>
                  <div className="flex flex-col items-start self-start">
                    <Text size="2xl" as="p">
                      Ryan Lee
                    </Text>
                    <Text as="p" className="!text-blue_gray-100">
                      E-commerce Manager
                    </Text>
                    <Text size="s" as="p" className="!text-blue_gray-100">
                      24-10-2022
                    </Text>
                  </div>
                </div>
                <div className="flex w-[56%] flex-col items-start gap-3 md:w-full">
                  <Text size="2xl" as="p">
                    Expertise in SEO
                  </Text>
                  <Text as="p" className="leading-8 !text-blue_gray-50">
                    A enim quis eget adipiscing fermentum. Euismod gravida massa vel nibh. Tempor euismod pellentesque
                    adipiscing ac elementum pellentesque quam sed nulla. Curabitur turpis et eu arcu in nulla. Ultricies
                    eu consequat nibh in eu eget. Mi.
                  </Text>
                </div>
              </div>
              <div className="flex gap-[13px]">
                <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[24px] w-[24px]" />
                <Img src="images/img_thumbs_down.svg" alt="thumbsdown_one" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center bg-gray-900 p-[37px] sm:p-5">
          <div className="mx-auto w-full max-w-[1140px]">
            <div className="flex items-center md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-3.5 md:self-stretch">
                <Heading as="h1" className="!text-gray-100">
                  <span className="text-gray-100">lambe</span>
                  <span className="text-pink-300">.</span>
                </Heading>
                <Text as="p" className="leading-8 !text-blue_gray-50">
                  Tempus congue tellus semper sapien urna. Tellus posuere ut.
                </Text>
                <div className="flex items-center gap-5">
                  <Img src="images/img_twitter.svg" alt="twitter_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_info.svg" alt="info_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_youtube.svg" alt="youtube_one" className="h-[28px] w-[28px]" />
                </div>
              </div>
              <div className="ml-[69px] flex flex-col items-start gap-3.5 self-end md:ml-0">
                <Text size="lg" as="p" className="uppercase tracking-[0.72px]">
                  Services
                </Text>
                <div className="flex flex-col justify-center gap-3">
                  <a href="#" className="mt-1">
                    <Text as="p" className="!text-blue_gray-50">
                      Digital Strategy
                    </Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-50">
                      Content Planing
                    </Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-50">
                      Graphic Design
                    </Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-50">
                      Website Design
                    </Text>
                  </a>
                </div>
              </div>
              <div className="ml-[63px] flex flex-col gap-3.5 self-end md:ml-0">
                <Text size="lg" as="p" className="uppercase tracking-[0.72px]">
                  Company
                </Text>
                <div className="flex flex-col items-start gap-3">
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-50">
                      About Us
                    </Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-50">
                      Contact Info
                    </Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-50">
                      Our Service
                    </Text>
                  </a>
                  <a href="Career" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-blue_gray-50">
                      Career
                    </Text>
                  </a>
                </div>
              </div>
              <div className="ml-[142px] flex flex-1 flex-col items-start gap-3.5 md:ml-0 md:self-stretch">
                <Text size="lg" as="p" className="uppercase tracking-[0.72px] !text-blue_gray-50">
                  Subscribe
                </Text>
                <div className="flex flex-col gap-[13px] self-stretch">
                  <Input shape="round" type="email" name="email" placeholder={`Your email`} className="sm:px-5" />
                  <Button
                    color="deep_purple_A400"
                    size="lg"
                    shape="round"
                    className="w-full font-medium uppercase tracking-[0.72px] sm:px-5"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-[69px] h-px bg-blue_gray-900" />
            <div className="mt-[35px] flex items-center md:flex-col">
              <Text size="xs" as="p" className="uppercase">
                Copyright © 2023 Pipowork
              </Text>
              <div className="ml-4 h-[10px] w-px rotate-[-90deg] bg-deep_purple-900 md:ml-0" />
              <a href="#" className="ml-[15px] md:ml-0">
                <Text size="xs" as="p" className="uppercase">
                  Design by Tokotema
                </Text>
              </a>
              <a href="#" className="ml-[470px] md:ml-0">
                <Text size="xs" as="p" className="uppercase">
                  Term of use
                </Text>
              </a>
              <div className="ml-4 h-[10px] w-px rotate-[-90deg] bg-deep_purple-900 md:ml-0" />
              <a href="#" className="ml-[15px] md:ml-0">
                <Text size="xs" as="p" className="uppercase">
                  Privacy Policy
                </Text>
              </a>
              <div className="ml-4 h-[10px] w-px rotate-[-90deg] bg-deep_purple-900 md:ml-0" />
              <a href="#" className="ml-[15px] md:ml-0">
                <Text size="xs" as="p" className="uppercase">
                  Cookie Policy
                </Text>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
