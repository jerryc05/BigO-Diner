
import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'
import cartIcon from '@/assets/cart.svg'
import { cart, isDark, setShowCart } from '@/states'
// import { darkBgBigOColor} from '@/utils/colors'
import { isDev } from '@/utils/constants'
import scrSize from '@/utils/scrSize'
// import TitleIcon from './TitleIcon'


const NAVBAR_HEIGHT = '6rem'

export default () => <nav class='w-full px-7 pt-5 pb-2 fixed top-0 flex justify-between items-center rounded-b-lg z-10'
  style={{ height: NAVBAR_HEIGHT }}>
  {/* Back btn */}
  {/* <button type="button" class="invisible">Back</button> */}

  {/* Dark btn & Cart & Username & Avatar */}
  <span class='flex justify-end'>
    {/* Dark btn */}
    {/* Cart */}
    <button type='button' class='px-3 mr-2 my-1 flex flex-center
      rounded-full shadow whitespace-nowrap bg-white text-xl text-black' onClick={() => setShowCart(true)}>
      <img class='h-6 pr-2' src={cartIcon} />
      { isDev ? scrSize : null }
      { cart.size }
    </button>
    {/* Username */}
    <b class='hidden sm:inline-flex flex-center text-lg mx-2 whitespace-nowrap'>jerryc05</b>
    {/* Avatar */}
    <button type='button' class='h-12 flex flex-center rounded-full shadow aspect-square
      focus:ring-gray-300 dark:focus:ring-gray-600 bg-white'>
      <img class='h-5/7 aspect-square' src={isDark() ? bigO : bingbing}/>
    </button>
  </span>

</nav>
