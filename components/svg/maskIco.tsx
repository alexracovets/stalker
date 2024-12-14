import { FC } from "react";

export const MaskIco: FC<{ color: string }> = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} className="transition-fill duration-300" fillRule="evenodd" clipRule="evenodd" d="M16.0325 1.06441C16.013 1.02833 15.688 1.00428 15.233 1.0103C14.817 1.01631 14.206 1.05238 13.8875 1.09447C13.5625 1.13656 13.0555 1.21472 12.75 1.26883C12.4445 1.32294 11.944 1.4492 11.6255 1.5454C11.3135 1.64761 10.878 1.80994 10.6505 1.91215C10.4295 2.01436 10.059 2.21878 9.825 2.35707C9.591 2.49535 9.1425 2.8561 8.824 3.14469C8.512 3.4393 8.122 3.85415 7.9725 4.0706C7.8165 4.28704 7.576 4.67785 7.433 4.94239C7.29 5.20694 7.0885 5.63983 6.991 5.89836C6.809 6.3553 6.7895 6.38536 6.51 6.49359C6.3475 6.55972 6.2045 6.63187 6.185 6.64991C6.1655 6.66794 6.094 6.69801 6.0225 6.71003C5.951 6.71604 5.8015 6.77015 5.6975 6.81825C5.587 6.87237 5.34 7.02869 5.145 7.16697C4.95 7.30526 4.677 7.53974 4.5405 7.68404C4.404 7.82833 4.2285 8.0568 4.144 8.18908C4.066 8.32135 3.923 8.64602 3.832 8.91056C3.741 9.1751 3.6305 9.52983 3.585 9.69217C3.5627 9.78843 3.51915 9.96529 3.47014 10.1643C3.43346 10.3133 3.39366 10.4749 3.3575 10.6241C3.273 10.9728 3.1625 11.562 3.104 11.9348C3.0455 12.3015 3 12.993 3 13.4679C3 14.0632 3.039 14.484 3.1235 14.8628C3.1885 15.1574 3.338 15.6083 3.4485 15.8549C3.559 16.1014 3.7995 16.4862 3.975 16.7146C4.183 16.9671 4.3325 17.1054 4.378 17.0754C4.4235 17.0573 4.443 17.0633 4.417 17.0934C4.3845 17.1235 4.4755 17.2377 4.612 17.3459C4.742 17.4542 5.0735 17.6405 5.3465 17.7668L5.8405 17.9893C5.9055 19.1557 5.9705 19.7208 6.016 20.0034C6.068 20.286 6.2695 20.9473 6.471 21.4764C6.6725 22.0055 6.835 22.4564 6.835 22.4865C6.835 22.5106 6.705 22.6128 6.5425 22.709C6.263 22.8833 6.2435 22.8833 6.055 22.7992C5.9445 22.7511 5.7885 22.709 5.6975 22.709C5.6065 22.709 5.3075 22.8533 5.015 23.0396C4.729 23.22 4.495 23.3944 4.495 23.4305C4.495 23.4665 4.4625 23.4786 4.43 23.4605C4.391 23.4425 4.3065 23.4846 4.235 23.5507C4.1375 23.6409 4.105 23.7491 4.105 23.9896C4.105 24.164 4.17 24.4886 4.2545 24.7231C4.339 24.9576 4.521 25.3604 4.651 25.625C4.7875 25.8895 5.106 26.4186 5.3595 26.7974C5.613 27.1762 6.042 27.7594 6.3085 28.09C6.5815 28.4207 7.0885 28.9678 7.4525 29.2985C7.81 29.6352 8.265 30.008 8.46 30.1282C8.655 30.2485 8.9345 30.3627 9.0775 30.3808L9.2855 30.3086C9.396 30.3387 9.5845 30.2485 10.033 29.9539C10.384 29.7254 10.67 29.4909 10.7155 29.3947C10.761 29.3045 10.7805 29.1482 10.7545 29.052C10.722 28.8897 10.7545 28.8536 11.021 28.6793C11.1835 28.571 11.3395 28.4808 11.3655 28.4808C11.398 28.4808 11.5605 28.5951 11.7425 28.7394C11.918 28.8777 12.269 29.1422 12.5225 29.3226C12.7695 29.503 13.296 29.8457 13.6925 30.0922C14.0825 30.3387 14.6285 30.6333 14.895 30.7535C15.3045 30.9399 15.5645 30.982 16 31C16 31 16.4875 30.994 16.8125 30.8738C17.027 30.7896 17.4625 30.5732 17.7875 30.3928C18.106 30.2064 18.691 29.8336 19.0875 29.5571C19.4775 29.2865 19.965 28.9318 20.16 28.7755C20.355 28.6131 20.5435 28.4808 20.5825 28.4808C20.615 28.4808 20.771 28.559 20.9205 28.6612C21.1805 28.8296 21.2 28.8596 21.2 29.1302C21.1935 29.3226 21.2325 29.4428 21.3105 29.515C21.3755 29.5691 21.707 29.7915 22.045 30.008C22.383 30.2244 22.7275 30.4048 22.8055 30.4048C22.89 30.4048 23.0915 30.3387 23.2605 30.2605C23.436 30.1824 23.761 29.9599 23.995 29.7615C24.1709 29.6169 24.3687 29.4417 24.5031 29.3228C24.5475 29.2835 24.5851 29.2503 24.6125 29.2264C24.7165 29.1242 24.957 28.8777 25.139 28.6853C25.321 28.4929 25.659 28.09 25.8865 27.7894C26.1205 27.4888 26.4325 27.0679 26.582 26.8455C26.7315 26.617 27.0305 26.106 27.2385 25.7031C27.4465 25.2943 27.6675 24.8073 27.726 24.6209C27.7845 24.4285 27.83 24.1399 27.83 23.9716C27.83 23.8032 27.791 23.6349 27.7455 23.5988C27.7 23.5567 27.375 23.3403 27.0305 23.1178C26.686 22.8893 26.335 22.709 26.2505 22.709C26.1725 22.709 26.0165 22.739 25.9125 22.7751C25.763 22.8232 25.672 22.8172 25.5225 22.7511C25.412 22.703 25.282 22.6188 25.23 22.5647C25.1455 22.4745 25.165 22.3663 25.4835 21.5185C25.6785 21.0014 25.8345 20.5084 25.8345 20.4243C25.8345 20.3401 25.854 20.2619 25.88 20.2439C25.906 20.2259 25.9645 19.9673 26.0035 19.6727C26.036 19.3781 26.088 18.8731 26.114 18.5604L26.1595 17.9893C26.9265 17.6465 27.3035 17.4121 27.4985 17.2557C27.687 17.0994 27.986 16.7808 28.1485 16.5463C28.3175 16.3058 28.532 15.903 28.636 15.6144C28.7335 15.3318 28.857 14.8448 28.909 14.5321C28.961 14.2195 29 13.6904 29 13.3597C29 13.029 28.9285 12.3136 28.844 11.7664C28.7595 11.2193 28.597 10.4197 28.48 9.99279C28.363 9.56591 28.1875 8.99473 28.0835 8.73019C27.973 8.46564 27.7715 8.1049 27.635 7.93656C27.492 7.7622 27.2645 7.5217 27.128 7.40747C26.998 7.28722 26.6535 7.06476 26.3675 6.90243C26.0815 6.7461 25.6915 6.55972 25.503 6.4996C25.1845 6.39137 25.1585 6.36733 25.0545 6.08474C24.996 5.92241 24.8335 5.53762 24.697 5.24301C24.554 4.9484 24.281 4.47944 24.086 4.20888C23.891 3.93231 23.6895 3.69783 23.6375 3.67979C23.5855 3.66176 23.54 3.61366 23.54 3.57758C23.54 3.5355 23.332 3.30702 23.072 3.07254C22.812 2.83806 22.409 2.53143 22.175 2.38713C21.941 2.24283 21.486 2.00835 21.1675 1.87007C20.8425 1.72577 20.277 1.53337 19.9 1.43116C19.523 1.33497 18.951 1.20871 18.6325 1.16061C18.3075 1.11251 17.651 1.04637 17.1635 1.02232C16.4875 0.986247 16.2535 0.99226 16.169 1.05238C16.104 1.09447 16.052 1.10048 16.0325 1.06441ZM14.9388 17.3156L14.7715 17.3459C14.4985 17.394 14.102 17.5022 13.8875 17.5864C13.673 17.6706 13.309 17.851 13.075 17.9893C12.841 18.1275 12.451 18.4101 12.204 18.6266C11.9635 18.837 11.632 19.1857 11.4825 19.4022C11.3265 19.6186 11.1185 19.9553 11.021 20.1537C10.93 20.3521 10.7935 20.6888 10.722 20.9053C10.657 21.1217 10.5855 21.5546 10.5595 21.8672C10.54 22.2039 10.553 22.6488 10.5985 22.9495C10.644 23.232 10.722 23.5928 10.7805 23.7611C10.8325 23.9235 11.008 24.2902 11.164 24.5728C11.32 24.8554 11.606 25.2642 11.8075 25.4867C12.0025 25.7152 12.3795 26.0398 12.633 26.2202C12.893 26.4006 13.27 26.629 13.465 26.7252C13.66 26.8274 14.0825 26.9838 14.4075 27.0679C14.8235 27.1822 15.207 27.2363 15.74 27.2603C16.2665 27.2844 16.6435 27.2664 17.0075 27.2002C17.2935 27.1521 17.7615 27.0198 18.0475 26.9116C18.3335 26.8034 18.769 26.587 19.0225 26.4306C19.2695 26.2743 19.653 25.9737 19.874 25.7633C20.0885 25.5588 20.394 25.2101 20.55 24.9937C20.706 24.7772 20.901 24.4586 20.9855 24.2842C21.07 24.1159 21.2 23.7491 21.278 23.4725C21.395 23.0817 21.421 22.8292 21.421 22.228C21.4145 21.6568 21.382 21.3622 21.2715 20.9954C21.1935 20.7309 21.018 20.298 20.8815 20.0335C20.745 19.7689 20.5045 19.4022 20.355 19.2218C20.199 19.0414 19.9715 18.7889 19.8415 18.6566C19.7115 18.5304 19.3865 18.2899 19.12 18.1215C18.8535 17.9532 18.444 17.7367 18.21 17.6405C17.976 17.5443 17.5665 17.4121 17.3 17.3519C17.0335 17.2858 16.5655 17.2257 16.26 17.2137C15.9545 17.2016 15.61 17.2016 15.4865 17.2197C15.3881 17.234 15.1616 17.2752 14.9388 17.3156ZM17.4235 18.6266C17.43 18.6566 17.391 18.6807 17.339 18.6807C17.287 18.6807 17.1245 18.7829 16.975 18.9091C16.832 19.0294 16.676 19.2278 16.637 19.342C16.598 19.4563 16.585 19.6607 16.611 19.793C16.6305 19.9252 16.715 20.1236 16.793 20.2319C16.8775 20.3401 17.0595 20.4784 17.2025 20.5445C17.3455 20.6106 17.5925 20.6648 17.755 20.6648C17.9565 20.6648 18.119 20.6227 18.275 20.5265C18.3985 20.4543 18.5675 20.28 18.6455 20.1537C18.73 20.0154 18.795 19.811 18.795 19.6727C18.795 19.5404 18.7365 19.318 18.665 19.1797C18.574 18.9933 18.4505 18.8731 18.2295 18.7588C18.054 18.6686 17.807 18.5905 17.6705 18.5845C17.5275 18.5785 17.417 18.5965 17.4235 18.6266ZM13.543 18.861C13.621 18.8129 13.803 18.7288 13.946 18.6747C14.1475 18.6085 14.2775 18.5965 14.4725 18.6386C14.6155 18.6686 14.8105 18.7468 14.908 18.819C14.999 18.8911 15.142 19.0595 15.2265 19.1917C15.337 19.3781 15.363 19.5044 15.3435 19.7389C15.324 19.9613 15.2655 20.1056 15.1225 20.274C15.0185 20.4002 14.83 20.5445 14.7195 20.5866C14.6025 20.6287 14.388 20.6648 14.245 20.6648C14.102 20.6648 13.907 20.6287 13.8095 20.5806C13.7055 20.5325 13.5495 20.4182 13.452 20.3221C13.3545 20.2319 13.244 20.0816 13.2115 19.9914C13.1725 19.8952 13.14 19.7328 13.14 19.6306C13.14 19.5224 13.1985 19.324 13.27 19.1917C13.348 19.0595 13.4715 18.9091 13.543 18.861ZM12.438 21.3862C12.308 21.4043 12.0935 21.4704 11.97 21.5366C11.8335 21.6087 11.684 21.771 11.593 21.9274C11.4825 22.1258 11.45 22.2701 11.463 22.4685C11.476 22.6188 11.554 22.8412 11.632 22.9675C11.7165 23.0998 11.8855 23.2441 12.048 23.3162C12.204 23.3884 12.438 23.4485 12.5745 23.4545C12.7045 23.4605 12.815 23.4485 12.815 23.4305C12.815 23.4124 12.919 23.3643 13.0425 23.3282C13.192 23.2741 13.3285 23.1599 13.4455 22.9976C13.556 22.8412 13.634 22.6308 13.647 22.4685C13.6665 22.2701 13.6275 22.1258 13.517 21.9334C13.4065 21.735 13.283 21.6328 13.023 21.5125C12.763 21.3923 12.62 21.3622 12.438 21.3862ZM19.055 21.4343C19.003 21.4524 18.8795 21.5185 18.782 21.5786C18.678 21.6388 18.5415 21.7951 18.47 21.9274C18.3985 22.0596 18.34 22.2821 18.34 22.4264C18.34 22.6007 18.392 22.7631 18.522 22.9495C18.626 23.0998 18.795 23.2621 18.912 23.3102C19.029 23.3583 19.1265 23.4124 19.12 23.4305C19.12 23.4485 19.2435 23.4605 19.3995 23.4545C19.5685 23.4545 19.7895 23.3884 19.978 23.2922C20.2055 23.1719 20.329 23.0577 20.42 22.8773C20.4915 22.733 20.55 22.5286 20.55 22.4264C20.55 22.3182 20.511 22.1378 20.459 22.0356C20.4135 21.9274 20.29 21.765 20.186 21.6748C20.082 21.5847 19.9195 21.4824 19.8155 21.4524C19.718 21.4163 19.5295 21.3862 19.393 21.3923C19.263 21.3923 19.107 21.4103 19.055 21.4343ZM16.793 24.4105C16.8775 24.3022 17.0465 24.164 17.17 24.0978C17.313 24.0197 17.521 23.9716 17.7225 23.9716C17.9565 23.9716 18.1125 24.0076 18.275 24.1038C18.3985 24.182 18.5675 24.3383 18.6455 24.4526C18.7495 24.5908 18.795 24.7472 18.795 24.9215C18.795 25.0598 18.7625 25.2462 18.7235 25.3424C18.691 25.4326 18.561 25.5949 18.4505 25.6971C18.3335 25.8053 18.1255 25.9256 17.9825 25.9617C17.8395 25.9977 17.612 26.0098 17.4755 25.9917C17.326 25.9677 17.1375 25.8715 16.9685 25.7332C16.8255 25.6069 16.676 25.4085 16.637 25.2943C16.598 25.1801 16.585 24.9756 16.611 24.8434C16.6305 24.7111 16.715 24.5187 16.793 24.4105ZM13.875 24.0978C13.7515 24.164 13.5825 24.3022 13.498 24.4105C13.42 24.5187 13.3355 24.7111 13.316 24.8434C13.29 24.9756 13.303 25.1801 13.342 25.2943C13.381 25.4085 13.5305 25.6069 13.6735 25.7332C13.8425 25.8715 14.031 25.9677 14.1805 25.9917C14.317 26.0098 14.5445 25.9977 14.6875 25.9617C14.8305 25.9256 15.0385 25.8053 15.1555 25.6971C15.266 25.5949 15.396 25.4326 15.4285 25.3424C15.4675 25.2462 15.5 25.0598 15.5 24.9215C15.5 24.7472 15.4545 24.5908 15.3505 24.4526C15.2725 24.3383 15.1035 24.182 14.98 24.1038C14.8175 24.0076 14.6615 23.9716 14.4275 23.9716C14.226 23.9716 14.018 24.0197 13.875 24.0978ZM15.0965 21.8011C15.1875 21.6869 15.363 21.5486 15.4865 21.4945C15.61 21.4343 15.8245 21.3862 15.9675 21.3923C16.1105 21.3923 16.364 21.4524 16.5265 21.5245C16.767 21.6267 16.858 21.7169 16.9685 21.9274C17.04 22.0777 17.0985 22.2941 17.105 22.4083C17.105 22.5226 17.04 22.739 16.9555 22.8833C16.8602 23.0557 16.715 23.196 16.52 23.3042C16.3445 23.4004 16.1365 23.4605 16 23.4605C15.8765 23.4545 15.636 23.3824 15.4605 23.2922C15.2265 23.1659 15.1225 23.0637 15.012 22.8472C14.9145 22.6428 14.882 22.4805 14.9015 22.2821C14.921 22.1137 14.9925 21.9334 15.0965 21.8011ZM15.09 16.5763C14.895 16.6064 14.557 16.6665 14.3425 16.7206C14.128 16.7687 13.933 16.7988 13.9005 16.7808C13.8745 16.7687 13.855 16.7808 13.855 16.8168C13.855 16.8529 13.7575 16.907 13.6405 16.9371C13.53 16.9732 13.166 17.1475 12.8475 17.3219C12.529 17.4962 12.1 17.7788 11.905 17.9472L11.3785 18.4101C11.3005 18.4762 11.1185 18.6927 10.9625 18.8911C10.8065 19.0895 10.566 19.4803 10.4165 19.7629C10.2735 20.0455 10.085 20.5024 10.007 20.785C9.87698 21.2179 9.85748 21.4403 9.85748 22.2881C9.85748 23.1599 9.87698 23.3342 10.0135 23.7311C10.0915 23.9776 10.254 24.3684 10.358 24.6029C10.4685 24.8373 10.6505 25.162 10.7675 25.3243C10.878 25.4927 11.177 25.8294 11.424 26.0759C11.6645 26.3224 12.0155 26.635 12.1975 26.7733C12.373 26.9116 12.789 27.1461 13.1075 27.2904C13.426 27.4407 13.9395 27.6391 14.245 27.7233C14.5505 27.8135 15.077 27.9097 15.415 27.9397C15.779 27.9758 16.247 27.9758 16.5525 27.9397C16.8385 27.9157 17.274 27.8435 17.5275 27.7894C17.781 27.7353 18.184 27.609 18.4375 27.5068C18.691 27.4046 19.003 27.2543 19.133 27.1822C19.2695 27.104 19.38 27.0499 19.38 27.0679C19.38 27.086 19.458 27.0379 19.5555 26.9657L19.6209 26.9098L19.7021 26.8406C19.843 26.7205 20.0499 26.5442 20.2445 26.3765C20.524 26.13 20.8815 25.7693 21.0245 25.5769C21.2523 25.2703 21.5 24.9063 21.681 24.5007C21.7655 24.3263 21.876 24.0317 21.9345 23.8513C21.993 23.6709 22.071 23.2922 22.1165 23.0096C22.162 22.7029 22.175 22.246 22.1555 21.8672C22.136 21.5185 22.0515 21.0375 21.98 20.785C21.902 20.5385 21.733 20.1176 21.5965 19.8531C21.4665 19.5885 21.2455 19.2218 21.1155 19.0414C20.9855 18.861 20.706 18.5484 20.5045 18.344C20.2965 18.1456 19.965 17.863 19.77 17.7247C19.575 17.5804 19.224 17.364 18.99 17.2377C18.756 17.1114 18.301 16.9311 17.9825 16.8289C17.664 16.7266 17.209 16.6124 16.975 16.5824C16.741 16.5463 16.3055 16.5222 16 16.5222C15.6945 16.5282 15.285 16.5523 15.09 16.5763ZM18.8346 7.85842C18.7891 7.88247 18.6136 7.91253 18.4316 7.93658C18.2561 7.96063 17.9831 8.03278 17.8336 8.09291C17.6776 8.15904 17.5216 8.27328 17.4761 8.35144C17.4371 8.42359 17.3916 8.74224 17.3721 9.05489C17.3461 9.50581 17.3721 9.72827 17.4826 10.1371C17.5606 10.4197 17.7361 10.8646 17.8726 11.1292C18.0156 11.3937 18.3276 11.8687 18.5681 12.1813C18.8086 12.494 19.2506 13.0351 19.5496 13.3838L19.6246 13.4713C19.8898 13.7805 20.1026 14.0287 20.1086 14.0452C20.1151 14.0632 20.4596 14.3758 20.8691 14.7426C21.2786 15.1093 21.7791 15.5062 21.9741 15.6264C22.1691 15.7467 22.5266 15.909 22.7736 15.9811C22.9109 16.0232 23.2941 16.1074 23.7291 16.1074C23.9631 16.0954 24.3206 16.0473 24.5286 15.9992C24.7301 15.9511 25.0096 15.8489 25.1461 15.7707C25.2761 15.6926 25.4516 15.5483 25.5296 15.4521C25.6076 15.3559 25.7181 15.1695 25.7831 15.0372C25.8416 14.9049 25.9326 14.6344 25.9781 14.436C26.0236 14.2376 26.0626 13.7806 26.0691 13.4139C26.0691 13.0411 26.0106 12.4098 25.9391 11.9709C25.8676 11.544 25.7441 10.9428 25.6661 10.6482C25.5881 10.3536 25.5296 10.065 25.5296 10.0169C25.5296 9.96877 25.5101 9.91465 25.4841 9.89662C25.4581 9.87858 25.3411 9.69821 25.2306 9.49379C25.1201 9.28336 24.9966 9.10299 24.9641 9.08495C24.9316 9.06691 24.9186 9.01881 24.9446 8.98274C24.9641 8.94065 24.9576 8.92261 24.9251 8.94666C24.8926 8.97071 24.7756 8.92261 24.6716 8.83243C24.5676 8.74825 24.3726 8.63402 24.2491 8.57389C24.1256 8.51377 23.8591 8.42359 23.6641 8.37549C23.4691 8.32138 23.0271 8.22518 22.6891 8.15904C22.3511 8.09291 21.6881 8.00873 21.2266 7.97266C20.7651 7.93057 20.3361 7.88247 20.2841 7.86443C20.2321 7.8464 19.9006 7.82836 19.5496 7.82836C19.1986 7.82235 18.8736 7.84039 18.8346 7.85842ZM8.52498 8.18907C8.83048 8.12894 9.39598 8.05078 9.79248 8.00869C10.189 7.96661 11.047 7.93053 11.71 7.92452C12.6005 7.91851 13.0035 7.94256 13.27 8.00869C13.465 8.06281 13.6925 8.159 13.7705 8.23717C13.8701 8.32535 13.9438 8.49971 13.9915 8.76024C14.0305 8.97669 14.0435 9.34344 14.024 9.57191C14.0045 9.80639 13.9395 10.1431 13.881 10.3235C13.829 10.5038 13.673 10.8405 13.5495 11.075C13.4195 11.3095 13.1725 11.7003 12.9905 11.9468C12.8085 12.1933 12.3535 12.7645 11.9765 13.2094C11.5995 13.6543 10.969 14.3217 10.5725 14.6824C10.1825 15.0492 9.68198 15.452 9.46748 15.5843C9.25298 15.7106 8.94748 15.8729 8.78498 15.939C8.53798 16.0472 8.36248 16.0653 7.67998 16.0653C6.91298 16.0653 6.84148 16.0533 6.47748 15.8909C6.39355 15.8909 5.96151 15.5182 5.75598 15.3318C5.66498 15.2055 5.54798 14.971 5.48948 14.8027C5.42448 14.6103 5.37898 14.1894 5.35948 13.6303C5.33348 12.999 5.35298 12.5661 5.43748 12.067C5.49598 11.6883 5.63248 11.051 5.73648 10.6541C5.84048 10.2573 5.99648 9.80038 6.07448 9.63204C6.15898 9.4697 6.34098 9.21117 6.48398 9.06687C6.62048 8.92258 6.85448 8.7422 6.99748 8.66404C7.14048 8.58588 7.41998 8.47165 7.61498 8.40551C7.80998 8.33938 8.21948 8.24318 8.52498 8.18907Z" />
    </svg>
); 