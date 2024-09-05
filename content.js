//     console.log('Content script loaded.');
//     function queryXPath(xpath, contextNode) {
//         const evaluator = new XPathEvaluator();
//         const result = evaluator.evaluate(xpath, contextNode || document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
//         return result.singleNodeValue;
//       }
//     function setEmailFieldValue(emailField, value) {
//       emailField.value = value;
//       const event = new Event('input', { bubbles: true });
//       emailField.dispatchEvent(event);
//       emailField.dispatchEvent(new Event('change', { bubbles: true }));
//     }
//     function setPasswordFieldValue(passwordField, value) {
//     passwordField.value = value;
//     const event = new Event('input', { bubbles: true });
//     passwordField.dispatchEvent(event);
//     passwordField.dispatchEvent(new Event('change', { bubbles: true }));
//     }
//     function setOfferNameFieldValue(offerNameField, value) {
//       offerNameField.value = value;
//       const event = new Event('input', { bubbles: true });
//       offerNameField.dispatchEvent(event);
//       offerNameField.dispatchEvent(new Event('change', { bubbles: true }));
//   }

//   function setOfferTermsFieldValue(offerTermsField, value) {
//       offerTermsField.value = value;
//       const event = new Event('input', { bubbles: true });
//       offerTermsField.dispatchEvent(event);
//       offerTermsField.dispatchEvent(new Event('change', { bubbles: true }));
//   }

//   function setMinimumOrderFieldValue(minimumOrderField, value) {
//       minimumOrderField.value = value;
//       const event = new Event('input', { bubbles: true });
//       minimumOrderField.dispatchEvent(event);
//       minimumOrderField.dispatchEvent(new Event('change', { bubbles: true }));
//   }

//   function setDiscountWorthFieldValue(discountWorthField, value) {
//       discountWorthField.value = value;
//       const event = new Event('input', { bubbles: true });
//       discountWorthField.dispatchEvent(event);
//       discountWorthField.dispatchEvent(new Event('change', { bubbles: true }));
//   }

//   function setMaxUsageFieldValue(maxUsageField, value) {
//       maxUsageField.value = value;
//       const event = new Event('input', { bubbles: true });
//       maxUsageField.dispatchEvent(event);
//       maxUsageField.dispatchEvent(new Event('change', { bubbles: true }));
//   }

//   function setIinsFieldValue(iinsField, value) {
//       iinsField.value = value;
//       const event = new Event('input', { bubbles: true });
//       iinsField.dispatchEvent(event);
//       iinsField.dispatchEvent(new Event('change', { bubbles: true }));
//   }

// function clickOfferLinkOffer() {
//     const offerlinkButton = queryXPath('//*[@id="react-root"]/div/div[2]/div[1]/div[2]/nav/div/div[6]/a[1]');
//     if (offerlinkButton) {
//       console.log('Action button found. Clicking...');
//       offerlinkButton.click();
//       setTimeout(clickCreateOffer, 30000); // Wait 1 second before checking the next elements
//     } else {
//       console.log('Action button not found. Retrying...');
//     }

// }
// function clickCreateOffer() {
//     const createOfferButton = queryXPath('/html/body/div[7]/div/button[1]');
//     if (createOfferButton) {
//         console.log('clicked to create offer');
//         createOfferButton.click();
//         setTimeout(clickdiscountCardButton, 1000);
//     }
//     else {
//         console.log('create offer not found');
//     }
// }
// function clickdiscountCardButton() {
//     const discountcardButton = queryXPath('//*[@id="textinput-1-input-2"]');
//     if (discountcardButton) {
//         console.log('clicked on discount button');
//         discountcardButton.click();
//         setTimeout(enteroffername, 1000);
//     }
//     else {
//         console.log('discount card not found');
//     }
// }

// function enteroffername() {

//     const offerdisplayname = queryXPath('//*[@id="textinput-1-input-2"]');
//     if (offerdisplayname) {
//       console.log('offer display field');
//       setTimeout(() => {
//         setOfferNameFieldValue(offerdisplayname, 'harshxfi'); // Replace with your email ID
//         console.log('offer name.');

//         // Check for the button and password field after entering email
//         setTimeout(enterofferterms, 1000); // Wait 1 second before checking the next elements
//       }, 500); // Delay in milliseconds
//       return true; // Field found, stop polling
//     } else {
//       console.log('offername not found');
//       return false; // Field not found, continue polling
//     }
// }
// function enterofferdisplay() {
//   const offerdisplay = queryXPath('//*[@id="textinput-7-input-8"]');
//   if (offerdisplay) {
//     console.log('offer display field');
//     setTimeout(() => {
//       setOfferNameFieldValue(offerdisplay, 'display offer anme'); // Replace with your email ID
//       console.log('offer display.');

//       // Check for the button and password field after entering email
//       setTimeout(enterofferterms, 1000); // Wait 1 second before checking the next elements
//     }, 500); // Delay in milliseconds
//     return true; // Field found, stop polling
//   } else {
//     console.log('offerndisplayame not found');
//     return false; // Field not found, continue polling
//   }
// }
// function enterofferterms() {
//   const offerterms = queryXPath('//*[@id="textarea-13-input-14"]');
//   if (offerterms) {
//     console.log('offer terms');
//     setTimeout(() => {
//       setOfferTermsFieldValue(offerterms, 'first condition'); // Replace with your email ID
//       console.log('offer terms.');

//       // Check for the button and password field after entering email
//       setTimeout(selectoffertype, 1000); // Wait 1 second before checking the next elements
//     }, 500); // Delay in milliseconds
//     return true; // Field found, stop polling
//   } else {
//     console.log('offer terms not found');
//     return false; // Field not found, continue polling
//   }
// }

// function selectoffertype() {
//   const offertype = queryXPath('//*[@id="dropdown-25-trigger-19-input-20"]');
//   if (offertype) {
//     console.log('clicked on discount button');
//     offertype.click();
//     setTimeout(discounttype, 1000);
// }
// else {
//     console.log('discount card not found');
// }
// }
// function discounttype() {
//   const discounttypepath = queryXPath('//*[@id="dropdown-25-1"]');
//   if (discounttypepath) {
//     console.log('discount instant');
//     discounttypepath.click();
//     setTimeout(nextbutton1, 1000);
//   } else {
//     console.log('discount instant')
//   }
// }
// function nextbutton1() {
//   const nextbutton1path = queryXPath('/html/body/div[9]/div/div[2]/div[2]/div[2]/div/button');
//   if (nextbutton1path) {
//     console.log('next button 1');
//     nextbutton1path.click();
//     setTimeout(consoleclick, 1000);
//   }
//   else {
//     console.log('exited');
//   }
// }

// function consoleclick() {
//     console.log('checking offer ttyoe');
//         }
//     const pollingInterval = 1000; // Time in milliseconds (1 second)
//     const maxAttempts = 1000; // Number of attempts before giving up

//     let attempts = 0;

//     const intervalId = setInterval(() => {
//       if (clickOfferLinkOffer()) {
//         clearInterval(intervalId); // Stop polling if field is found
//       } else {
//         attempts++;
//         if (attempts >= maxAttempts) {
//           clearInterval(intervalId); // Stop polling after max attempts
//           console.error('Failed to find Email/Mobile Number field after multiple attempts.');
//         }
//       }
//     }, pollingInterval);

console.log("Content script loaded.");

function queryXPath(xpath, contextNode = document) {
  const evaluator = new XPathEvaluator();
  const result = evaluator.evaluate(
    xpath,
    contextNode,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  return result.singleNodeValue;
}

function dispatchInputEvent(element) {
  const event = new Event("input", { bubbles: true });
  element.dispatchEvent(event);
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

function setFieldValue(selector, value, setFieldFunction) {
  const field = queryXPath(selector);
  if (field) {
    console.log(`${selector} field found.`);
    setFieldFunction(field, value);
    return true;
  }
  console.log(`${selector} field not found.`);
  return false;
}

async function clickElement(selector) {
  const element = queryXPath(selector);
  if (element) {
    console.log(`${selector} found, clicking.`);
    element.click();
    return true;
  }
  console.log(`${selector} not found.`);
  return false;
}

async function clickElementByTitle(title) {
  console.log(title);
  const element = document.querySelector(`[title='${title}]`);
  if (element) {
    console.log(`Element with title '${title}' found.`);
    element.click();
    return true;
  }
  console.log(`Element with title '${title}' not found.`);
  return false;
}

async function automate() {
  if (
    await clickElement(
      '//*[@id="react-root"]/div/div[2]/div[1]/div[2]/nav/div/div[6]/a[1]'
    )
  ) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for page transition
    if (await clickElement("/html/body/div[6]/div/button[1]")) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for elements to be interactive
      if (
        await clickElement(
          "/html/body/div[1]/div/div[2]/div[1]/main/div[2]/div/div[1]/div/div/div/div/div[2]/div[1]/div"
        )
      ) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (
          setFieldValue(
            "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[1]/div[1]/div[2]/div/input",
            "harshofferfi",
            (field, value) => {
              field.value = value;
              dispatchInputEvent(field);
            }
          )
        ) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (
            setFieldValue(
              "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[2]/div[1]/div[2]/div/input",
              "offer display text",
              (field, value) => {
                field.value = value;
                dispatchInputEvent(field);
              }
            )
          ) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (
              setFieldValue(
                "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[3]/div[1]/div[2]/div/textarea",
                "first condition values",
                (field, value) => {
                  field.value = value;
                  dispatchInputEvent(field);
                }
              )
            ) {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              if (
                await clickElement(
                  "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[4]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                )
              ) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                if (
                  await clickElement(
                    "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[4]/div/div[2]/div/div/div/button[2]"
                  )
                ) {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  if (
                    await clickElement(
                      "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button"
                    )
                  ) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    if (
                      await clickElement(
                        "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                      )
                    ) {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      if (
                        await clickElement(
                          "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div/div[2]/div/div/div/button[2]"
                        )
                      ) {
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        if (
                          setFieldValue(
                            "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[2]/div[1]/div[2]/div/input",
                            "5000",
                            (field, value) => {
                              field.value = value;
                              dispatchInputEvent(field);
                            }
                          )
                        ) {
                          await new Promise((resolve) =>
                            setTimeout(resolve, 1000)
                          );
                          if (
                            setFieldValue(
                              "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[4]/div[1]/div[2]/div/input",
                              "414",
                              (field, value) => {
                                field.value = value;
                                dispatchInputEvent(field);
                              }
                            )
                          ) {
                            await new Promise((resolve) =>
                              setTimeout(resolve, 1000)
                            );
                            if (
                              await clickElement(
                                "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button[2]"
                              )
                            ) {
                              await new Promise((resolve) =>
                                setTimeout(resolve, 1000)
                              );
                              if (
                                await clickElement(
                                  "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                                )
                              ) {
                                await new Promise((resolve) =>
                                  setTimeout(resolve, 1000)
                                );
                                if (
                                  await clickElement(
                                    "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div[2]/div/div/div/button[2]"
                                  )
                                ) {
                                  await new Promise((resolve) =>
                                    setTimeout(resolve, 1000)
                                  );
                                  if (
                                    await clickElement(
                                      "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[2]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                                    )
                                  ) {
                                    await new Promise((resolve) =>
                                      setTimeout(resolve, 1000)
                                    );
                                    if (
                                      await clickElement(
                                        "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[2]/div/div[2]/div/div/div/button[1]"
                                      )
                                    ) {
                                      await new Promise((resolve) =>
                                        setTimeout(resolve, 1000)
                                      );
                                      if (
                                        await clickElement(
                                          "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[3]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                                        )
                                      ) {
                                        await new Promise((resolve) =>
                                          setTimeout(resolve, 1000)
                                        );
                                        if (
                                          await clickElement(
                                            "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div[3]/div/div[2]/div/div/div/button[4]"
                                          )
                                        ) {
                                          await new Promise((resolve) =>
                                            setTimeout(resolve, 1000)
                                          );
                                          if (
                                            await clickElement(
                                              "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button[2]"
                                            )
                                          ) {
                                            await new Promise((resolve) =>
                                              setTimeout(resolve, 100)
                                            );
                                            {
                                              await new Promise((resolve) =>
                                                setTimeout(resolve, 300)
                                              );
                                              {
                                                await new Promise((resolve) =>
                                                  setTimeout(resolve, 300)
                                                );
                                                
                                                {
                                                  await new Promise((resolve) =>
                                                    setTimeout(resolve, 300)
                                                  );
                                                  if (
                                                    await clickElement(
                                                      "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[3]/div[2]/div[1]/div/div/input"
                                                    )
                                                  ) {
                                                    await new Promise(
                                                      (resolve) =>
                                                        setTimeout(
                                                          resolve,
                                                          3000
                                                        )
                                                    );
                                                    // end date
                                                    if (
                                                      await clickElement(
                                                        "/html/body/div[9]/div/div/div/div/div[2]/div[2]/table/tbody/tr[4]/td[5]/div"
                                                      )
                                                    ) {
                                                      await new Promise(
                                                        (resolve) =>
                                                          setTimeout(
                                                            resolve,
                                                            3000
                                                          )
                                                      );
                                                      if (
                                                        await clickElement(
                                                          "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[4]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/button"
                                                        )
                                                      ) {
                                                        await new Promise(
                                                          (resolve) =>
                                                            setTimeout(
                                                              resolve,
                                                              1000
                                                            )
                                                        );
                                                        if (
                                                          await clickElement(
                                                            "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div[4]/div/div[2]/div/div/div/button[3]"
                                                          )
                                                        );
                                                        await new Promise(
                                                          (resolve) =>
                                                            setTimeout(
                                                              resolve,
                                                              1000
                                                            )
                                                        );
                                                        if (
                                                          await clickElement(
                                                            "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button[2]"
                                                          )
                                                        ) {
                                                          await new Promise(
                                                            (resolve) =>
                                                              setTimeout(
                                                                resolve,
                                                                1000
                                                              )
                                                          );
                                                          if (
                                                            await clickElement(
                                                              "/html/body/div[8]/div/div[2]/div[1]/div/main/form/div/div/div/div/div/div/div/div/label/div/div/div[1]"
                                                            )
                                                          ) {
                                                            await new Promise(
                                                              (resolve) =>
                                                                setTimeout(
                                                                  resolve,
                                                                  1000
                                                                )
                                                            );
                                                            if (
                                                              await clickElement(
                                                                "/html/body/div[8]/div/div[2]/div[2]/div[2]/div/button[2]"
                                                              )
                                                            ) {
                                                              // await new Promise(resolve => setTimeout(resolve, 1000));
                                                              console.log(
                                                                "automation complete"
                                                              );
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

automate();
