import { motion } from 'framer-motion'
import { Icon, IconBrand } from './Icon'
import { ToastContainer, toast } from 'react-toastify'
import InfiniteLooper from './RunningLine'
import MascotComponent from './WoofComponent'
import CountdownTimer from './CountdownTimer'

const handleCopy = async ({ text }: { text: string }) => {
  try {
    await navigator.clipboard.writeText(text)
    toast('Copied!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark'
    })
  } catch (err) {
    console.error('Ошибка при копировании текста: ', err)
  }
}

const MascotWithShake = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }} // Маскот невидим и на месте
      animate={{
        opacity: [0, 1, 1, 1, 1, 1], // Маскот становится видимым
        x: [0, -10, 10, -10, 10, 0], // Тряска (движение по оси X)
        y: [0, -10, 10, -10, 10, 0]
      }}
      transition={{
        delay: 1, // Задержка перед началом анимации
        duration: 2.5, // Общая длительность анимации
        times: [0, 0.3, 0.5, 0.7, 0.9, 1], // Тайминг: последовательность кадров
        repeat: 0, // Анимация повторяется только один раз
        ease: 'easeInOut' // Плавное изменение
      }}
      style={{
        backgroundImage: 'url(/images/mascot.png)',
        backgroundSize: 'contain'
      }}
      className="absolute left-0 top-0 size-full bg-center bg-no-repeat"
    />
  )
}

const MascotBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Начальная прозрачность 0
      animate={{ opacity: 1 }} // Конечная прозрачность 1
      transition={{
        delay: 1, // Изображение появляется через 1 секунду после фона
        duration: 1 // Плавное появление
      }}
      style={{
        backgroundImage: 'url(/images/mascot-bg.png)',
        backgroundSize: 'contain'
      }}
      className="absolute left-[-18px] top-[-54px] size-[120%] bg-center bg-no-repeat"
    />
  )
}

function App() {
  return (
    <div>
      <div
        className="absolute h-[900px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/bg.png)', zIndex: -6 }}
      ></div>
      <ToastContainer />
      <motion.div
        className="absolute left-0 top-0 size-full bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/lines-bg.png)',
          zIndex: -5
        }}
        initial={{ y: '-5%', opacity: 0 }} // Начальное состояние: за пределами экрана и полностью прозрачный
        animate={{ y: 0, opacity: 1 }} // Конечное состояние: на месте и с полной непрозрачностью
        exit={{ y: '-5%', opacity: 0 }} // При выходе: снова исчезает и выходит за пределы экрана
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25,
          delay: 0.3 // Задержка для начала анимации opacity
        }}
      ></motion.div>

      <div className="mx-[20px] lg:mx-[100px]" id="main">
        <div className="mb-[60px] flex items-center justify-between p-4">
          <div className="hidden size-[114px] lg:block">
            <img
              src="/images/logo.png"
              alt="Icon"
              className="size-[95px] transition-transform hover:rotate-[-20deg]"
            />
          </div>

          <div className="flex gap-[20px] space-x-6 lg:gap-[110px]">
            <button
              className="font-jockey text-[20px] text-[#E0C6E3] transition text-shadow-display hover:text-[#bfaac1] lg:text-[30px]"
              onClick={() => {
                const mainElement = document.getElementById('main')
                if (mainElement) {
                  mainElement.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              HOME
            </button>
            <button
              className="font-jockey text-[20px] text-[#E0C6E3] transition text-shadow-display hover:text-[#bfaac1] lg:text-[30px]"
              onClick={() => {
                const mainElement = document.getElementById('about')
                if (mainElement) {
                  mainElement.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              ABOUT
            </button>
            <button
              className="font-jockey text-[20px] text-[#E0C6E3] transition text-shadow-display hover:text-[#bfaac1] lg:text-[30px]"
              onClick={() => {
                const mainElement = document.getElementById('roadmap')
                if (mainElement) {
                  mainElement.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              ROADMAP
            </button>
          </div>

          <div className="flex space-x-4">
            <a
              className="flex size-[50px] items-center justify-center rounded-[100%] bg-[#7717824d]"
              href="https://x.com/0xForecasts"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrand
                className="text-[30px] text-[#b3b3b34d] transition hover:text-white"
                iconGlyph=""
              />
            </a>
            <a
              className="flex size-[50px] items-center justify-center rounded-[100%] bg-[#7717824d]"
              href="https://t.me/+4jDM-ut9OdgyNmIy"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrand
                className="text-[30px] text-[#b3b3b34d] transition hover:text-white"
                iconGlyph=""
              />
            </a>
          </div>
        </div>
        <div className="mx-[50px] flex h-[450px] justify-between gap-[55px] overflow-visible lg:h-[568px]">
          <div className="hidden flex-[1] lg:block">
            <div className="relative size-full">
              <MascotBackground />
              <MascotWithShake />
            </div>
            <div className="relative flex justify-center">
              <div className="absolute top-[-120px] rounded-[30px] bg-white px-[25px] py-[10px] align-middle font-jockey text-[30px] text-[#421847]">
                $BUNNYBUN
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <motion.div
              style={{
                z: 12
              }}
              initial={{ y: '-10%', opacity: 0 }} // Начальное состояние: за пределами экрана и полностью прозрачный
              animate={{ y: 0, opacity: 1 }} // Конечное состояние: на месте и с полной непрозрачностью
              exit={{ y: '-10%', opacity: 0 }} // При выходе: снова исчезает и выходит за пределы экрана
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1.65 // Задержка для начала анимации opacity
              }}
            >
              <span
                className="mb-[15px] inline-block cursor-pointer select-none rounded-[20px] bg-[#8b52929c] px-[23px] py-[8px] font-corbel text-[20px] text-white transition active:bg-[#8b529242]"
                onClick={() => handleCopy({ text: 'You find ester egg! :)' })}
              >
                CA: very very soon....
                <Icon className="ml-[15px] text-[18px]" iconGlyph=""></Icon>
              </span>
              <span className="block select-none font-passionOne text-[100px]/[77%] text-[#FFFFFF] text-shadow-display lg:text-[165px]/[77%]">
                BUNNY DOG
              </span>
              <span className="select-none font-passionOne text-[100px]/[77%] text-[#d584ea] text-shadow-display lg:text-[150px]/[77%]">
                MEME
              </span>
              <div className="flex">
                <span className="flex-[2] font-corbel text-[15px] text-[#ffffffc9] lg:text-[25px]">
                  BunnyBun: Spin, Laugh, Earn – Where Every Turn Brings You
                  Closer to Your Dreams.
                </span>
                <a
                  href="#"
                  className="inline-block max-h-[40px] items-center rounded-[30px] bg-[#8B5292] px-[25px] py-[10px] font-jockey text-[15px] text-white transition hover:bg-[#67406c] lg:max-h-[70px] lg:text-[30px]"
                >
                  VERY VERY SOON...
                </a>
              </div>
            </motion.div>
            <span className="my-[15px] mb-[30px] inline-block select-none rounded-[20px] bg-[#8b52929c] px-[23px] py-[8px] font-corbel text-[20px] text-white sm:mb-[15px]">
              <CountdownTimer></CountdownTimer>
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="mt-[60px] flex h-[70px] w-[140%] flex-col items-center bg-[#241620] shadow-runningLine">
          <InfiniteLooper speed="8" direction="left">
            <div className="flex items-center justify-center">
              <Icon
                className="ml-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
              <p className="mx-[10px] font-jockey text-[22px] text-[#F489B8]">
                $BUNNYBUN
              </p>
              <Icon
                className="mr-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
            </div>
          </InfiniteLooper>
          <InfiniteLooper speed="8" direction="right">
            <div className="flex items-center justify-center">
              <Icon
                className="ml-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
              <p className="mx-[10px] font-jockey text-[22px] text-[#F489B8]">
                $BUNNYBUN
              </p>
              <Icon
                className="mr-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
            </div>
          </InfiniteLooper>
        </div>
      </div>

      <div className="relative bg-[#251A22] py-[65px]" id="about">
        <MascotComponent></MascotComponent>

        <div className="mx-[20px] lg:mx-[100px]">
          <p className="mb-[50px] font-jockey text-[50px] text-white">ABOUT</p>

          <div className="flex h-[300px] w-[500px] max-w-full items-stretch sm:h-[140px] xl:h-[114px] xl:w-[1000px]">
            <div className="flex items-center">
              <Icon className="text-[18px] text-[#F489B8]" iconGlyph=""></Icon>
            </div>
            <div className="mx-[10px]">
              <div className="relative flex items-center">
                <div className="h-px w-[14px] border border-white"></div>
                <span className="arrow right absolute left-[10px] border-white"></span>
              </div>
              <div className="h-full w-px border border-white"></div>
              <div className="relative flex items-center">
                <div className="h-px w-[14px] border border-white"></div>
                <span className="arrow right absolute left-[10px] border-white"></span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <p className="font-corbel text-[19px] text-white">
                Once, my friend's dog chewed up his paint cans, even eating a
                bit of them. The most delicious one turned out to be the{' '}
                <span className="text-[21px] font-bold text-[#F489B8]">
                  purple can
                </span>
                . Don't worry, the dog is fine, but we often remember this story
                with friends, as my friend lost a very expensive palette and
                couldn't finish his painting. The paint on the dog's fur didn't
                come off for over a year. I thought this could be a great idea
                for the token's name.
              </p>
            </div>
          </div>

          <div className="mt-[100px] flex h-[600px] w-[750px] max-w-full items-stretch sm:h-[250px] lg:mt-[50px] lg:h-[171px] lg:w-[900px]">
            <div className="flex items-center">
              <Icon className="text-[18px] text-[#F489B8]" iconGlyph=""></Icon>
            </div>
            <div className="mx-[10px]">
              <div className="relative flex items-center">
                <div className="h-px w-[14px] border border-white"></div>
                <span className="arrow right absolute left-[10px] border-white"></span>
              </div>
              <div className="h-full w-px border border-white"></div>
              <div className="relative flex items-center">
                <div className="h-px w-[14px] border border-white"></div>
                <span className="arrow right absolute left-[10px] border-white"></span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <p className="font-corbel text-[19px] text-white">
                I've never created my own tokens or developed anything in
                cryptocurrency before, and I'm working alone. I've always wanted
                to make money in crypto, but I kept stumbling upon scam coins or
                coins whose value dropped to zero. I'm tired of this and want to
                create an ecosystem that allows people to invest their money
                without losing it in just a few minutes. Let's be clear, this is
                also an investment project. I've invested my own money into it,
                and I want to make a profit. I'm not greedy, and I have no
                intention of rug-pulling the token or deceiving my audience. I'm
                committed to working long-term and building a strong community
                around it.
              </p>
            </div>
          </div>

          <div className="my-[100px] flex max-w-full flex-col sm:mt-[20px] sm:gap-[20px] lg:mb-0 lg:mt-[20px] lg:flex-row">
            <div className="mt-[105px] flex h-[700px] items-stretch sm:h-[260px]">
              <div className="flex items-center">
                <Icon
                  className="text-[18px] text-[#F489B8]"
                  iconGlyph=""
                ></Icon>
              </div>
              <div className="mx-[10px]">
                <div className="relative flex items-center">
                  <div className="h-px w-[14px] border border-white"></div>
                  <span className="arrow right absolute left-[10px] border-white"></span>
                </div>
                <div className="h-full w-px border border-white"></div>
                <div className="relative flex items-center">
                  <div className="h-px w-[14px] border border-white"></div>
                  <span className="arrow right absolute left-[10px] border-white"></span>
                </div>
              </div>
              <div className="flex flex-col justify-center space-x-2">
                <p className="ml-[10px] font-corbel text-[22px] font-bold text-[#FFC3DA]">
                  How am I (the token creator) going to make money?
                </p>
                <p className="font-corbel text-[19px] text-white">
                  I won't hold a large percentage of the token supply and sell
                  it later. Most of the tokens will be locked from the start. I
                  plan to buy the token with a small amount after its launch,
                  20-30 minutes in, when it's more convenient. From there, I'll
                  help promote the token, earning alongside the community. This
                  adds trust to the token since I’m openly saying I want to
                  earn, and it’s in both my and your interests to grow the
                  token.
                </p>
                <br />
                <p className="font-corbel text-[19px] text-white">
                  With part of the profits, I will invest in advertising, run
                  broadcasts, build the ecosystem, create NFT collections, and
                  develop an app where the main goal will be to spend your{' '}
                  <span className="text-[21px] font-bold text-[#F489B8]">
                    $BUNNYBUN
                  </span>
                  , with the potential to earn.
                </p>
              </div>
            </div>

            <div className="mt-[105px] flex h-[360px] items-stretch sm:h-[170px]">
              <div className="flex items-center">
                <Icon
                  className="text-[18px] text-[#F489B8]"
                  iconGlyph=""
                ></Icon>
              </div>
              <div className="mx-[10px]">
                <div className="relative flex items-center">
                  <div className="h-px w-[14px] border border-white"></div>
                  <span className="arrow right absolute left-[10px] border-white"></span>
                </div>
                <div className="h-full w-px border border-white"></div>
                <div className="relative flex items-center">
                  <div className="h-px w-[14px] border border-white"></div>
                  <span className="arrow right absolute left-[10px] border-white"></span>
                </div>
              </div>
              <div className="flex flex-col justify-center space-x-2">
                <p className="ml-[10px] font-corbel text-[22px] font-bold text-[#FFC3DA]">
                  How am I (the token creator) going to make money?
                </p>
                <p className="font-corbel text-[19px] text-white">
                  Buy the token at launch, sell it later, spend your{' '}
                  <span className="text-[21px] font-bold text-[#F489B8]">
                    $BUNNYBUN
                  </span>
                  on the site for rewards, complete tasks to earn more{' '}
                  <span className="text-[21px] font-bold text-[#F489B8]">
                    $BUNNYBUN
                  </span>
                  , participate in giveaways on Twitter (X) and Telegram, and
                  rest assured that you won’t lose all your invested funds
                  instantly, as the dev wallet will not hold any tokens—check
                  the tokenomics for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex h-[70px] w-[140%] flex-col items-center bg-[#241620] shadow-runningLine">
          <InfiniteLooper speed="8" direction="left">
            <div className="flex items-center justify-center">
              <Icon
                className="ml-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
              <p className="mx-[10px] font-jockey text-[22px] text-[#F489B8]">
                $BUNNYBUN
              </p>
              <Icon
                className="mr-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
            </div>
          </InfiniteLooper>
          <InfiniteLooper speed="8" direction="right">
            <div className="flex items-center justify-center">
              <Icon
                className="ml-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
              <p className="mx-[10px] font-jockey text-[22px] text-[#F489B8]">
                $BUNNYBUN
              </p>
              <Icon
                className="mr-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
            </div>
          </InfiniteLooper>
        </div>
      </div>

      <div
        className="bg-gradient-to-b from-[#2C1225] to-[#2B2C37] py-[65px]"
        id="roadmap"
      >
        <div className="mx-[20px] lg:mx-[100px]">
          <p className="mb-[50px] font-jockey text-[50px] text-white">
            ROADMAP
          </p>

          <div className="grid grid-cols-1 flex-row flex-wrap gap-[50px] lg:grid-cols-2">
            <div className="rounded-[20px] border border-[#DA7BA5] bg-[#00000023] px-[30px] py-[40px] ">
              <p className="font-corbel text-[26px] font-bold text-white">
                1. Launch token on{' '}
                <span className="text-[29px] font-bold text-[#F489B8]">
                  Solana
                </span>
              </p>
              <p className="font-corbel text-[20px] text-[#ffffffda]">
                We will launch the token on the Solana network with a total
                supply of 1,000,000 tokens. The most reliable site for creating
                tokens is pump.fun. The created tokens here cannot be changed,
                this increases the trust of the community. 100% of the tokens
                purchased by the dev will be blocked.
              </p>
              <p className="font-corbel text-[18px] text-[#ffffff78]">
                April 2025
              </p>
            </div>
            <div className="rounded-[20px] border border-[#DA7BA5] bg-[#00000023] px-[30px] py-[40px]">
              <p className="font-corbel text-[26px] font-bold text-white">
                2. Token Promotion
              </p>
              <p className="font-corbel text-[20px] text-[#ffffffda]">
                The funds raised from the token will be used for its promotion.
                We will purchase ads on X (Twitter), Telegram, and collaborate
                with well-known influencers to spread awareness and drive
                engagement.
              </p>
              <p className="font-corbel text-[18px] text-[#ffffff78]">
                April → June 2025
              </p>
            </div>
            <div className="rounded-[20px] border border-[#DA7BA5] bg-[#00000023] px-[30px] py-[40px]">
              <p className="font-corbel text-[26px] font-bold text-white">
                3. DEX launch
              </p>
              <p className="font-corbel text-[20px] text-[#ffffffda]">
                Once the token reaches a certain level of popularity, we will
                launch it on all available DEX platforms to increase
                accessibility and liquidity.
              </p>
              <p className="font-corbel text-[18px] text-[#ffffff78]">
                June 2025
              </p>
            </div>
            <div className="rounded-[20px] border border-[#DA7BA5] bg-[#00000023] px-[30px] py-[40px]">
              <p className="font-corbel text-[26px] font-bold text-white">
                4. Launch of Mini Games on the Website
              </p>
              <p className="font-corbel text-[20px] text-[#ffffffda]">
                We will launch a variety of mini games on the website to earn
                tokens, starting with a prize wheel and extending to daily
                giveaways for user activity!
              </p>
              <p className="font-corbel text-[18px] text-[#ffffff78]">
                Jule 2025
              </p>
            </div>
            <div className="rounded-[20px] border border-[#DA7BA5] bg-[#00000023] px-[30px] py-[40px]">
              <p className="font-corbel text-[26px] text-[#ffffff78]">
                5. Very soon...
              </p>
            </div>
            <div className="rounded-[20px] border border-[#DA7BA5] bg-[#00000023] px-[30px] py-[40px]">
              <p className="font-corbel text-[26px] text-[#ffffff78]">
                6. Soon...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex h-[70px] w-[140%] flex-col items-center bg-[#241620] shadow-runningLine">
          <InfiniteLooper speed="8" direction="left">
            <div className="flex items-center justify-center">
              <Icon
                className="ml-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
              <p className="mx-[10px] font-jockey text-[22px] text-[#F489B8]">
                $BUNNYBUN
              </p>
              <Icon
                className="mr-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
            </div>
          </InfiniteLooper>
          <InfiniteLooper speed="8" direction="right">
            <div className="flex items-center justify-center">
              <Icon
                className="ml-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
              <p className="mx-[10px] font-jockey text-[22px] text-[#F489B8]">
                $BUNNYBUN
              </p>
              <Icon
                className="mr-[40px] text-[18px] text-[#FACCF4]"
                iconGlyph=""
              ></Icon>
            </div>
          </InfiniteLooper>
        </div>
      </div>
    </div>
  )
}

export default App
