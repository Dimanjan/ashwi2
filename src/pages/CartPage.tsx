import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../App';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
}

interface CustomerDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1479036287129489562/1IKS-_JqwbExD1WgHxsMABdful7QpoyvGg8XStjZx7sk1869Ib5fytTgNmEqP3wPCGqc';

async function sendDiscordWebhook(payload: unknown) {
  const jsonBody = JSON.stringify(payload);
  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody,
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`);
    }

    return { ok: true, verified: true };
  } catch {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: jsonBody,
    });
    return { ok: true, verified: false };
  }
}

function CartPage({
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart,
}: CartPageProps) {
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'error' | 'success' | ''>('');

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      ),
    [cartItems]
  );

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const formatPrice = (amount: number) => `रु ${amount.toLocaleString('en-IN')}`;

  const handleCheckout = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      setStatusType('error');
      setStatusMessage('Your cart is empty.');
      return;
    }

    setIsSubmitting(true);
    setStatusType('');
    setStatusMessage('');

    const lines = cartItems.map(
      (item) =>
        `${item.product.name} x ${item.quantity} = ${formatPrice(
          item.product.price * item.quantity
        )}`
    );

    const payload = {
      content: 'New front-end cart checkout request',
      embeds: [
        {
          title: 'New Order',
          color: 3447003,
          fields: [
            { name: 'Customer Name', value: customer.name },
            { name: 'Phone Number', value: customer.phone },
            { name: 'Email', value: customer.email || 'N/A' },
            { name: 'Address', value: customer.address },
            { name: 'Total Items', value: String(itemCount), inline: true },
            { name: 'Subtotal', value: formatPrice(subtotal), inline: true },
            {
              name: 'Order Items',
              value: lines.join('\n').slice(0, 1024),
            },
            { name: 'Notes', value: customer.notes || 'N/A' },
          ],
        },
      ],
    };

    try {
      const webhookResult = await sendDiscordWebhook(payload);
      setStatusType('success');
      setStatusMessage(
        webhookResult.verified
          ? 'Order submitted. We will contact you shortly.'
          : 'Order submitted. If you do not hear back soon, please contact us on WhatsApp.'
      );
      onClearCart();
      setCustomer({
        name: '',
        phone: '',
        email: '',
        address: '',
        notes: '',
      });
    } catch (error) {
      setStatusType('error');
      setStatusMessage('Could not submit order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10">
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h1 className="m-0 text-[2rem] font-serif text-brand-deep">Your Cart</h1>
        <Link
          className="inline-flex justify-center items-center rounded-lg border border-line bg-surface text-brand-deep px-4 py-2 font-semibold hover:bg-tag-bg transition-colors"
          to="/"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
        <section className="bg-surface border border-line rounded-xl p-5 md:p-6">
          {cartItems.length === 0 ? (
            <p className="m-0 text-muted">Your cart is currently empty.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <article
                  key={item.product.id}
                  className="border border-line rounded-lg p-4 flex flex-col md:flex-row gap-4 md:items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full md:w-[130px] h-[90px] object-cover rounded-md border border-line"
                  />
                  <div className="flex-1">
                    <h2 className="m-0 text-[1.05rem] text-brand-deep font-serif">
                      {item.product.name}
                    </h2>
                    <p className="m-0 mt-1 text-muted text-[0.9rem]">
                      {formatPrice(item.product.price)} each
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="w-9 h-9 rounded-md border border-line bg-bg text-brand-deep font-bold cursor-pointer"
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="w-9 h-9 rounded-md border border-line bg-bg text-brand-deep font-bold cursor-pointer"
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="md:text-right">
                    <p className="m-0 font-bold text-brand-deep">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    <button
                      type="button"
                      className="mt-1 text-[0.84rem] text-[#B44A42] hover:underline bg-transparent border-none cursor-pointer p-0"
                      onClick={() => onRemoveFromCart(item.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="bg-surface border border-line rounded-xl p-5 md:p-6 h-fit">
          <h2 className="m-0 mb-4 text-[1.3rem] font-serif text-brand-deep">
            Checkout Details
          </h2>
          <p className="m-0 text-muted text-[0.92rem] mb-4">
            Total ({itemCount} items):{' '}
            <span className="font-bold text-brand-deep">{formatPrice(subtotal)}</span>
          </p>

          <form className="flex flex-col gap-3" onSubmit={handleCheckout}>
            <input
              className="w-full rounded-lg border border-line p-3 bg-bg"
              placeholder="Customer Name *"
              required
              value={customer.name}
              onChange={(event) =>
                setCustomer((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <input
              className="w-full rounded-lg border border-line p-3 bg-bg"
              placeholder="Phone Number *"
              type="tel"
              pattern="[0-9+\\-()\\s]{7,20}"
              required
              value={customer.phone}
              onChange={(event) =>
                setCustomer((prev) => ({ ...prev, phone: event.target.value }))
              }
            />
            <input
              className="w-full rounded-lg border border-line p-3 bg-bg"
              placeholder="Email (optional)"
              type="email"
              value={customer.email}
              onChange={(event) =>
                setCustomer((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <textarea
              className="w-full rounded-lg border border-line p-3 bg-bg min-h-[84px]"
              placeholder="Delivery Address *"
              required
              value={customer.address}
              onChange={(event) =>
                setCustomer((prev) => ({ ...prev, address: event.target.value }))
              }
            />
            <textarea
              className="w-full rounded-lg border border-line p-3 bg-bg min-h-[70px]"
              placeholder="Notes (optional)"
              value={customer.notes}
              onChange={(event) =>
                setCustomer((prev) => ({ ...prev, notes: event.target.value }))
              }
            />

            {statusMessage && (
              <p
                className={`m-0 text-[0.88rem] font-semibold ${
                  statusType === 'success' ? 'text-success' : 'text-[#B44A42]'
                }`}
              >
                {statusMessage}
              </p>
            )}

            <button
              className="mt-1 inline-flex justify-center items-center rounded-lg bg-brand text-white py-3 px-4 font-bold border border-brand hover:bg-brand-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting || cartItems.length === 0}
            >
              {isSubmitting ? 'Submitting...' : 'Place Order'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default CartPage;
