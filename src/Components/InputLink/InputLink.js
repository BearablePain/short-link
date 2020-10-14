import React from 'react';
import { InputGroupAddon, Input, Button } from 'reactstrap';
import useInput from '../../hooks/useInput';
// 4b91b6bbc4e44dd0a94b37f648edc49b

const InputLink = () => {
  const [valueInput, setValueInput] = useInput({
    link: '',
  });

  const submitLink = async (url) => {
    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //  console.log(url)
    //     const responce = await fetch(`${proxyurl}https://goo-gl.su/api/AIzaSyAZ__VVCzONaDH93rFtbjiX2OUWuu7y51g&url=${url.link}&alias=CustomAlias`)
    //     console.log(await responce.json())
    // const payload = {
    //   destination: url,
    //   domain: { fullName: 'short-link' },
    //   workspace: 'short-link',
    // };
    // let headers = {
    //   apikey: '4b91b6bbc4e44dd0a94b37f648edc49b',
    // };
    // let params = {
    //   headers: headers,
    //   contentType: 'application/json',
    //   method: 'post',
    //   payload: JSON.stringify(payload),
    //   muteHttpExceptions: true,
    // };
    // const responce = fetch('https://api.rebrandly.com/v1/links', params);
    // console.log(await responce);
    // const link = await responce.json();
    // console.log(
    //   `Long URL was ${payload.destination}, short URL is ${link.shortUrl}`
    // );
    // const responce = await fetch(
    //   'https://short-link-486b8.firebaseio.com/links.json',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(url),
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //   }
    // );
    // const result = await responce.json();
    // console.log(parseInt(result.name, 36));
  };
  return (
    <div>
      <InputGroupAddon
        addonType="append"
        style={{ justifyContent: 'center', padding: '20px' }}
      >
        <Input
          bsSize="lg"
          style={{ width: '60%' }}
          name="link"
          value={valueInput.link}
          onChange={setValueInput}
        />
        <Button color="secondary" onClick={() => submitLink(valueInput)}>
          Сократить
        </Button>
      </InputGroupAddon>
    </div>
  );
};

export default InputLink;
