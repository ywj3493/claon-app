import VersionLogo from 'climbingweb/src/assets/version_logo.svg';
import { useGetAppVersion } from 'climbingweb/src/hooks/queries/app-version/useGetAppVersion';
import { useMemo } from 'react';
import { NormalButton } from '../common/button/Button';
import ErrorContent from '../common/Error/ErrorContent';
import Loading from '../common/Loading/Loading';

export const VersionInfo = () => {
  // appVersion server state
  const {
    data: appVersionData,
    isError: isAppVersionError,
    error: appVersionError,
  } = useGetAppVersion('aos');

  // appVersion client state
  const clientAppVersion = '1.0.0';

  const buttonDisabled = useMemo(() => {
    if (!appVersionData) return true;
    return appVersionData.version === clientAppVersion ? true : false;
  }, [appVersionData?.version]);

  if (isAppVersionError) return <ErrorContent error={appVersionError} />;

  if (appVersionData)
    return (
      <div className="h-full overscroll-none flex flex-col justify-center items-center pl-2">
        <div className="flex flex-col items-center gap-3 text-sm font-normal">
          <VersionLogo alt="version_logo" />
          <p>현재버전: {clientAppVersion}</p>
          <p>
            최신버전:{' '}
            <span className="text-[#5953ff]">{appVersionData.version}</span>
          </p>
          <NormalButton
            disabled={buttonDisabled}
            className="text-base w-[120px] !h-[48px] font-bold disabled:text-white disabled:bg-[#BFBFBF]"
          >
            업데이트
          </NormalButton>
        </div>
      </div>
    );

  return <Loading />;
};
