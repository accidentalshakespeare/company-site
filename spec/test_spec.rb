describe "test", type: :feature, js: true do
  it 'has a title' do
    visit '/'

    expect(find('.container').text).to eq('')
  end
end
