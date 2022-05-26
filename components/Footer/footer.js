import { Fragment } from 'react'
import style from './Footer.module.sass'
import cn from 'classnames'
import Image from 'next/Image'
import Link from 'next/link'

export default function Footer({ container = false }) {
  return (
    <Fragment>
      <footer className="footer t-left">
        <div className={cn({ container }, style.borderTop)}>
          <div className={cn('row', 'pt-1', 'pb-1', 'clear')}>
            <div className="col-lg-6 col-md-3 col-sm-2">
              <Link href="/#">
                <a className="medium">John Doe</a>
              </Link>
              {/* <a href="/#" className="medium">
              </a> */}
            </div>
            <div className="col-lg-6 col-md-3 col-sm-2">
              <ul className={style.profileLinks}>
                <li>
                  <span className={cn(style.icon, 'block')}>
                    <Link href="/#">
                      <a className="medium">
                        <Image
                          width="18px"
                          height="18px"
                          layout="fixed"
                          objectFit="contain"
                          src="/assets/images/svg/IlGithub.svg"
                          alt="github.com"
                        />
                      </a>
                    </Link>
                  </span>
                </li>
                <li>
                  <span className={cn(style.icon, 'block')}>
                    <Link href="/#">
                      <a className="medium">
                        <Image
                          width="18px"
                          height="18px"
                          layout="fixed"
                          objectFit="contain"
                          src="/assets/images/svg/CibBehance.svg"
                          alt="behance.com"
                        />
                      </a>
                    </Link>
                  </span>
                </li>
                <li>
                  <span className={cn(style.icon, 'block')}>
                    <Link href="/#">
                      <a className="medium">
                        <Image
                          width="18px"
                          height="18px"
                          layout="fixed"
                          objectFit="contain"
                          src="/assets/images/svg/BxBxlDevTo.svg"
                          alt="dev.to"
                        />
                      </a>
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}
